import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { readStorage, removeToken } from '../utils/localStorage';

function NavBar() {
  const { name } = readStorage();
  const navigate = useNavigate();

  return (
    <menu style={ { display: 'flex', justifyContent: 'space-around' } }>
      <div>
        {role !== 'seller'
          && (
            <Link
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Link>)}
      </div>
    <menu>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </Link>
      <Link
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Pedidos
      </Link>
      <div data-testid="customer_products__element-navbar-user-full-name">
        {name}
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
