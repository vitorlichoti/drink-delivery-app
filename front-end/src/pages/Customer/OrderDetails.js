import React from 'react';
import NavBar from '../../components/NavBar';
import CustomerOrderDetails from '../../components/Customer/CustomerOrderDetails';

import '../Style/OrderDetail.css';

function OrderDetails() {
  // Pegar o id da url, consultar os detalhes no banco e popular a tabela via props
  // Sugestão: guardar os produtos numa "const products = [{}]"
  // ** DESCOMENTAR LINHAS 3 e 10 **
  return (
    <div>
      <NavBar />
      <h4>Detalhes do pedido</h4>
      <CustomerOrderDetails />
    </div>
  );
}

export default OrderDetails;
