import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import httpRequestAxios from '../utils/httpRequestAxios';
import { readStorage } from '../utils/localStorage';

function CustomerOrderDetails() {
  const [order, setOrder] = useState({});

  const { token } = readStorage();

  const { id } = useParams();

  useEffect(() => {
    async function getOrderDetail() {
      const { data } = await httpRequestAxios('get', `http://localhost:3001/customer/orders/${id}`, {}, { headers: { Authorization: token } });
      setOrder(data);
    }
    getOrderDetail();
  });

  const TESTID_COMMON = 'customer_order_details__element-order-';

  return (
    <main>
      <div>
        <span data-testid={ `${TESTID_COMMON}details-label-order-id` }>
          {`PEDIDO ${order.id}`}
        </span>
        <span data-testid={ `${TESTID_COMMON}details-label-seller-name` }>
          {`P.Vend: ${order.seller.name}`}
        </span>
        <span data-testid={ `${TESTID_COMMON}details-label-order-date` }>
          {`PEDIDO ${order.saleDate}`}
        </span>
        <span data-testid={ `${TESTID_COMMON}details-label-delivery-status1` }>
          {`${order.status.toUpperCase()}`}
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {order.products.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={ `${TESTID_COMMON}table-item-number-${index}` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `${TESTID_COMMON}table-name-${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `${TESTID_COMMON}table-quantity-${index}` }
              >
                {product.SalesProduct.quantity}
              </td>
              <td
                data-testid={ `${TESTID_COMMON}table-unit-price-${index}` }
              >
                {`R$${product.price.replace(/\./, ',')}`}
              </td>
              <td
                data-testid={ `${TESTID_COMMON}table-sub-total-${index}` }
              >
                {(Number(product.price) * Number(product.SalesProduct.quantity))
                  .toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1
        data-testid={ `${TESTID_COMMON}total-price` }
      >
        TOTAL: R$
        {' '}
        {`${order.totalPrice}`}
      </h1>
    </main>
  );
}

export default CustomerOrderDetails;
