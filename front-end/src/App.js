import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Orders from './pages/Orders';
import SellerOrderDetail from './pages/SellerOrderDetail';
import Products from './pages/Products';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';
// import './App.css';
// import rockGlass from './images/rockGlass.svg';

// function App() {
//   return (
//     <div className="App">
//       <span className="logo">TRYBE</span>
//       <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
//         Glass
//       </object>
//     </div>
//   );
// }

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/seller/orders/1" element={ <SellerOrderDetail /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}

export default App;
