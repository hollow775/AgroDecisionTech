import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Para redirecionamento
import '../style/pagesStyle/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Para redirecionar após login bem-sucedido

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne recarregamento da página
    try {
      const response = await axios.post('/auth/login', { email, senha });
      const token = response.data.token; // Obter o token de autenticação
      localStorage.setItem('token', token); // Armazena o token no Local Storage
      navigate('/'); // Redireciona para a página principal
    } catch (error) {
      setError(error.response.data.error); // Exibe mensagem de erro em caso de falha
    }
  };

  return (
      <form className="login" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </div>
        <button type="submit">Entrar</button>
        {error && <div className="error">{error}</div>}
      </form>
  );
};

export default Login;
