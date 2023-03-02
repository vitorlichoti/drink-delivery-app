import React from 'react';
import NavBar from '../components/NavBar';
// import TableProducts from '../components/TableProducts';

function OrderDetails() {
  // Pegar o id da url, consultar os detalhes no banco e popular a tabela via props
  // Sugestão: guardar os produtos numa "const products = [{}]"
  // ** DESCOMENTAR LINHAS 3 e 10 **
  return (
    <div>
      <NavBar />
      {/* <TableProducts orderDetais={products} /> */}
    </div>
  );
}

export default OrderDetails;
