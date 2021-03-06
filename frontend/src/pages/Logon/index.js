import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';




export default function Logon() {
  const [id, setId] = useState('');

  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault()

    try{
      const response = await api.post('session', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      navigate('/profile')
    } catch(err){
      alert('Falha no Login. Tente novamente.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Heroe" />
        
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Sua ID" 
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041"/>
            Não tem cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Imagem Heroes" />
    </div>
  );
}

// React tem que ser className, pois class já está reservado no JS