import React from 'react';
import { useNavigate } from 'react-router-dom';
import { readStorage, removeToken } from '../../utils/localStorage';

import '../Style/NavBarAdmin.css';

function NavBarAdmin() {
  const { name } = readStorage();
  const navigate = useNavigate();

  return (
    <menu className="menu-container">
      <div
        className="user-manage"
        data-testid="customer_products__element-navbar-link-orders"
      >
        GERENCIAR USUARIOS
      </div>
      <div className="user-and-button">
        <div
          className="customer-name"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </div>
        <button
          className="loggout-button"
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ () => {
            removeToken();
            navigate('/login');
          } }
        >
          Sair
        </button>
      </div>
    </menu>
  );
}

export default NavBarAdmin;
