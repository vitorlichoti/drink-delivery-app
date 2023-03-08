import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { readStorage, removeToken } from '../utils/localStorage';

import './Style/NavBar.css';

function NavBar() {
  const { name, role } = readStorage();
  const navigate = useNavigate();

  return (
    <menu className="menu-container">
      <div className="nav-to-products-container">
        {role !== 'seller'
          && (
            <Link
              className="nav-to-products-text"
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              PRODUTOS
            </Link>)}
      </div>
      <div className="orders-link-user-menu">
        <Link
          className="nav-to-order-text"
          to={ `/${role}/orders` }
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Link>
        <div className="customer-name-loggout">
          <div
            className="customer-name"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {name}
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
      </div>
    </menu>
  );
}

export default NavBar;
