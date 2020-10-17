import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/registration-success.css';

function RegistrationSuccess() {
  return (
    <div id="page-registration-success">
      <div className="success-content-wrapper">
        <main>
          <h1>Ebaaa!</h1>

          <p>O cadastro deu certo e foi enviado
            ao administrador para ser aprovado.
            Agora é só esperar :)</p>

          <Link to="/app" className="success-enter-app">
            Voltar para o mapa
          </Link>
        </main>
      </div>
    </div>
  );
}

export default RegistrationSuccess;