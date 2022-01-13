import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'

import api from "../../services/api"
import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const navigate = useNavigate(); //serve para mandar o cliente para outra página, já que não é possível usar o Link do react-router-dom

  async function handleRegister(event){
    event.preventDefault();

    const data = {
      name, email, whatsapp, city, uf
    };

    try {
      const response = await api.post("ongs", data)

      alert(`Seu ID de acesso: ${response.data.id}`)

      navigate('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Não tem cadastro
          </Link>
        </section>
      
        <form onSubmit={handleRegister}>
          <input 
            value={name} 
            onChange={event => setName(event.target.value)} 
            placeholder="Nome da ONG" 
          />
          <input 
            value={email} 
            onChange={event => setEmail(event.target.value)} 
            placeholder="E-mail" 
          />
          <input
            value={whatsapp} 
            onChange={event => setWhatsapp(event.target.value)}  
            placeholder="Whatsapp"
           />

          <div className="input-group">
            <input 
              value={city} 
              onChange={event => setCity(event.target.value)} 
              placeholder="Cidade" 
            />
            <input 
            value={uf} 
            onChange={event => setUf(event.target.value)} 
            placeholder="UF" style={ 
              { width: 80}
            }
            />
          </div>
          
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}