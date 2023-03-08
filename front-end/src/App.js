import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import OrderDetails from './pages/Customer/OrderDetails';
import Orders from './pages/Customer/Orders';
import SellerOrderDetail from './pages/Seller/SellerOrderDetail';
import Products from './pages/Customer/Products';
import Register from './pages/Register';
import Checkout from './pages/Customer/Checkout';
import SellerOrders from './pages/Seller/SellerOrders';
import Admin from './pages/Admin/Admin';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/seller/orders/:id" element={ <SellerOrderDetail /> } />
      <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/admin/manage" element={ <Admin /> } />
    </Routes>
  );
}

export default App;
