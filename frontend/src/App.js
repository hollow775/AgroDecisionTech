import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'; // Importa a tela de cadastro
import Login from './pages/Login'; // Importa a tela de login

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Rota para a homepage */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        {/* Outras rotas do seu aplicativo */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
