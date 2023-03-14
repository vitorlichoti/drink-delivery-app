import React from 'react';
import NavBar from '../../components/NavBar';
import CustomerOrderDetails from '../../components/Customer/CustomerOrderDetails';

import '../Style/OrderDetail.css';

function OrderDetails() {
  return (
    <div>
      <NavBar />
      <h4>Detalhes do pedido</h4>
      <CustomerOrderDetails />
    </div>
  );
}

export default OrderDetails;
