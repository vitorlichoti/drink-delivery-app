import React from 'react';
import { useNavigate } from 'react-router-dom';
import { readStorage, removeToken } from '../../utils/localStorage';

import '../Style/NavBar.css';

function NavBarAdmin() {
  const { name } = readStorage();
  const navigate = useNavigate();

  return (
    <menu className="menu-container">
      <div
        className="nav-to-products-container"
        data-testid="customer_products__element-navbar-link-orders"
      >
        <p className="nav-to-products-text" style={ { fontSize: '28px' } }>
          GERENCIAR USUARIOS
        </p>
      </div>
      <div className="orders-link-user-menu">
        <div className="nav-to-order-text"> </div>
        <div className="customer-name-loggout">
          <p
            className="customer-name"
            data-testid="customer_products__element-navbar-user-full-name"
            style={ { fontSize: '26px' } }
          >
            { name }
          </p>
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
      </div>
    </menu>
  );
}

export default NavBarAdmin;
