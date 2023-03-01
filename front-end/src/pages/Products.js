import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CustomerProducts from '../components/CustomerProducts';
import httpRequestAxios from '../utils/httpRequestAxios';
import { removeToken, readStorage } from '../utils/localStorage';

const TWO_HUNDRED = 200;

function Products() {
  const navigate = useNavigate();
  const { token } = readStorage();

  useEffect(() => {
    const res = httpRequestAxios('post', 'http://localhost:3001/token', {}, token);
    if (res.status !== TWO_HUNDRED) {
      removeToken();
      navigate('/login');
    }
  }, [token]);

  return (
    <main>
      <NavBar />
      <CustomerProducts />
    </main>
  );
}

export default Products;
