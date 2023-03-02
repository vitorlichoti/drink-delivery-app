import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import OrderDetails from './pages/OrderDetails';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
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
      <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/admin/manage" element={ <Admin /> } />
    </Routes>
  );
}

export default App;
