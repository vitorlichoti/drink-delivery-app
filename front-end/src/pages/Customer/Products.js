import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import CustomerProducts from '../../components/Customer/CustomerProducts';
import httpRequestAxios from '../../utils/httpRequestAxios';
import { removeToken, readStorage } from '../../utils/localStorage';

import '../../components/Style/CustomerProducts.css';

const TWO_HUNDRED = 200;

function Products() {
  const navigate = useNavigate();
  const { token } = readStorage();

  useEffect(() => {
    async function verifyToken() {
      const res = await httpRequestAxios('post', 'http://localhost:3001/token', {}, { headers: { Authorization: token } });
      if (res.status !== TWO_HUNDRED) {
        removeToken();
        navigate('/login');
      }
    }
    verifyToken();
  });

  return (
    <main className="customer-products-page">
      <NavBar />
      <CustomerProducts />
    </main>
  );
}

export default Products;
