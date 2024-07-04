import React, { useState } from 'react';
import axios from 'axios'; // Para chamadas HTTP
import { useNavigate } from 'react-router-dom'; // Para redirecionamento
import '../style/pagesStyle/Auth.css';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Para redirecionar após o cadastro

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne recarregamento da página
    try {
      const response = await axios.post('/auth/register', { nome, email, senha });
      console.log('Cadastro bem-sucedido:', response.data);
      navigate('/login'); // Redireciona para a tela de login após o cadastro
    } catch (error) {
      setError(error.response.data.error); // Exibe mensagem de erro em caso de falha
    }
  };

  return (
      <form className='signup' onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </div>
        <button type="submit">Cadastrar</button>
        {error && <div className="error">{error}</div>}
      </form>
  );
};

export default Cadastro;
