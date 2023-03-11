import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import httpRequestAxios from '../../utils/httpRequestAxios';
import formatDate from '../../utils/formatDates';
import { readStorage } from '../../utils/localStorage';

import handleStatusColor from '../../utils/handleStatusColor';

import '../Style/CustomerOrderDetails.css';

const FOUR = 4;

function CustomerOrderDetails() {
  const [order, setOrder] = useState({});
  const [formatedDateDay, setFormatedDate] = useState('');
  const [orderStatus, setOrderStatus] = useState();
  const [sellerName, setSellerName] = useState('');
  const [buttonStatus, setButtonStatus] = useState(true);

  const { token } = readStorage();

  const { id } = useParams();

  async function updateOrderStatus(status) {
    console.log(status);
    await httpRequestAxios('put', 'http://localhost:3001/seller/orders', {
      id,
      status,
    });
  }

  async function changeStatus() {
    setOrderStatus('Entregue');
    updateOrderStatus('Entregue');
    setButtonStatus(true);
  }

  useEffect(() => {
    async function getOrderDetail() {
      const { data } = await httpRequestAxios('get', `http://localhost:3001/customer/orders/${id}`, {}, { headers: { Authorization: token } });
      const date = formatDate(data.saleDate);
      if (data.status === 'Em Trânsito') setButtonStatus(false);
      setSellerName(data.seller.name);
      setFormatedDate(date);
      setOrderStatus(data.status);
      setOrder(data);
    }
    getOrderDetail();
  }, [id, token]);

  const TESTID_COMMON = 'customer_order_details__element-order-';

  return (
    <main className="main-orders-details">
      <header className="header-container">
        <span data-testid={ `${TESTID_COMMON}details-label-order-id` }>
          {`PEDIDO ${order.id ? order.id.toString().padStart(FOUR, '0') : null}`}
        </span>
        <span data-testid={ `${TESTID_COMMON}details-label-seller-name` }>
          {`P.Vend: ${sellerName}`}
        </span>
        <span data-testid={ `${TESTID_COMMON}details-label-order-date` }>
          {`${formatedDateDay}`}
        </span>
        <span
          style={ handleStatusColor(orderStatus) }
          data-testid={ `${TESTID_COMMON}details-label-delivery-status1` }
        >
          {`${orderStatus?.toUpperCase()}`}
        </span>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled={ buttonStatus }
          onClick={ () => changeStatus() }
        >
          MARCAR COMO ENTREGUE
        </button>
      </header>
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
          {order.products?.map((product, index) => (
            <tr
              className="table-rows"
              key={ product.id }
            >
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
      <footer className="footer-total">
        <p
          data-testid={ `${TESTID_COMMON}total-price` }
        >
          { 'Total: R$ ' }
          {`${order.totalPrice?.replace(/\./, ',')}`}
        </p>
      </footer>
    </main>
  );
}

export default CustomerOrderDetails;
