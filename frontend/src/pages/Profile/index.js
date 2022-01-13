import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile(){
  const navigate = useNavigate();

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }). 
      then(resp => {
        setIncidents(resp.data)
    })

  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`,  {
        headers: {
        Authorization: ongId,
      }})

      setIncidents(incidents.filter(incident => incident.id !== id)) // vai pegar todos os incidents e compara o id de cada um com id do incidente deletado, quais forem iguais, são apagados da lista
    } catch (error) {
      alert('Erro ao deletar caso. Tente novamente.')
      
    }
  }

  function handleLogout(){
    localStorage.clear();

    navigate('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, { ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrado</h1>
      <ul> 
        {incidents.map(incident => (
          <li key={incident.id}>
          <strong>CASO:</strong>
          <p>{incident.title}</p>

          <strong>DESCRIÇÃO:</strong>
          <p>{incident.description}</p>

          <strong>VALOR:</strong>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

          <button onClick={() => handleDeleteIncident(incident.id)} type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        ) )}
      </ul>
    </div>
  );
}