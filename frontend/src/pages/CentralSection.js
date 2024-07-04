import React from 'react';
import '../style/pagesStyle/HomePage.css'; // Arquivo CSS para estilização

const CentralSection = () => {
  return (
    <div className="central-section">
      <button onClick={() => alert('Botão 1 clicado')}>Notícias</button>
      <button onClick={() => alert('Botão 2 clicado')}>Gestão de gastos</button>
      <button onClick={() =>alert('Botão 3 clicado')}>Potencializando seus ganhos</button>
    </div>
  );
};

export default CentralSection;
