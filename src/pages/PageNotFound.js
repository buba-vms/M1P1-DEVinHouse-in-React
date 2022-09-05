import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <div className="not-found-center">
      <h3>Página não Encontrada</h3>

      <Link to="/">
        <p>voltar para pagina principal </p>
      </Link>
    </div>
  );
};

export default PageNotFound;
