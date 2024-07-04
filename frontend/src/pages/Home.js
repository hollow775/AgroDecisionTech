// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Para redirecionamento
// import '../style/pagesStyle/Home.css'; // Arquivo CSS para estilização

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="homepage">
//       <header className="homepage-header">
//         <div className="homepage-title">Meu Site</div> {/* Título do site */}
//         <div className="homepage-auth-buttons">
//           <button onClick={() => navigate('/login')}>Login</button>
//           <button onClick={() => navigate('/cadastro')}>Cadastro</button>
//         </div> {/* Botões de login e cadastro no canto superior direito */}
//       </header>

//       <div className="homepage-center">
//         <button onClick={() => navigate('/pagina1')}>Página 1</button>
//         <button onClick={() => navigate('/pagina2')}>Página 2</button>
//         <button onClick={() => navigate('/pagina3')}>Página 3</button>
//       </div> {/* Três botões centrais para navegação */}
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import Header from '../pages/Header';
import CentralSection from '../pages/CentralSection';
import Footer from '../pages/Footer';
import '../style/pagesStyle/HomePage.css'; // Arquivo CSS para estilização

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="homepage-content"> {/* Área para o conteúdo central */}
        <CentralSection /> {/* Seção centralizada com três botões */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
