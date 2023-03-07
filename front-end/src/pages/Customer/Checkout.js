import React from 'react';
import NavBar from '../../components/NavBar';
import TableProducts from '../../components/Customer/TableProducts';
import Forms from '../../components/Customer/FormsCheckout';

function Checkout() {
  return (
    <main>
      <NavBar />
      <h1>Finalizado Pedido</h1>
      <TableProducts />
      <Forms />
    </main>
  );
}

export default Checkout;
