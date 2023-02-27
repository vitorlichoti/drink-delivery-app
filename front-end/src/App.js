import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
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
    </Routes>
  );
}

export default App;
