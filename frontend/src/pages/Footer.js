import React from 'react';
import '../style/pagesStyle/HomePage.css'; // Arquivo CSS para estilização
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 AgroDecisionTech. Todos os direitos reservados.</p> {/* Informação de direitos autorais */}
        <div className="footer-links">
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/termos-de-servico">Termos de Serviço</a>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div> {/* Links úteis */}
      </div>
    </footer>
  );
};

export default Footer;
