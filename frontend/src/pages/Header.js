import React from 'react';
import { Link } from 'react-router-dom'; // Para criar links de navegação
import '../style/pagesStyle/HomePage.css'; // Arquivo CSS para estilização

const Header = () => {

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">AgroDecisionTech</Link>
      </div> {/* Logo do site */}
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav> {/* Barra de navegação */}
    </header>
  );
};

export default Header;
