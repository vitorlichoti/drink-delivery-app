import React from 'react';
import { useNavigate } from 'react-router-dom';
import { readStorage, removeToken } from '../utils/localStorage';

function NavBar() {
  const { name } = readStorage();
  const navigate = useNavigate();

  return (
    <menu>
      <div data-testid="customer_products__element-navbar-link-products">
        Produtos
      </div>
      <div data-testid="customer_products__element-navbar-link-orders">
        Meus Pedidos
      </div>
      <div data-testid="customer_products__element-navbar-user-full-name">
        { name }
      </div>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ () => {
          removeToken();
          navigate('/login');
        } }
      >
        Sair
      </button>
    </menu>
  );
}

export default NavBar;
