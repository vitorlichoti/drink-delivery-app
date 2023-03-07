import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import httpRequestAxios from '../utils/httpRequestAxios';
import { readStorage } from '../utils/localStorage';

function CustomerOrderDetails() {
  const [order, setOrder] = useState({});
  const [formatedDateDay, setFormatedDate] = useState('');
  const [orderStatus, setOrderStatus] = useState();
  const [sellerName, setSellerName] = useState('');
  const [buttonStatus, setButtonStatus] = useState(true);

  const { token } = readStorage();

  const { id } = useParams();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formatedDate = `${date.getDate().toString()
      .padStart(2, '0')}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${date.getFullYear()}`;
    return formatedDate;
  };

  useEffect(() => {
    async function getOrderDetail() {
      const { data } = await httpRequestAxios('get', `http://localhost:3001/customer/orders/${id}`, {}, { headers: { Authorization: token } });
      const date = formatDate(data.saleDate);
      console.log(data.status);
      if (data.status === 'Entregue') setButtonStatus(false);
      setSellerName(data.seller.name);
      setFormatedDate(date);
      setOrderStatus(data.status);
      setOrder(data);
    }
    getOrderDetail();
  }, [id, token]);

  const TESTID_COMMON = 'customer_order_details__element-order-';

  return (
    <main>
      <div>
        <span data-testid={ `${TESTID_COMMON}details-label-order-id` }>
          {`PEDIDO ${order.id}`}
        </span>
        <span data-testid={ `${TESTID_COMMON}details-label-seller-name` }>
          {`P.Vend: ${sellerName}`}
        </span>
        <span data-testid={ `${TESTID_COMMON}details-label-order-date` }>
          {`PEDIDO ${formatedDateDay}`}
        </span>
        <span data-testid={ `${TESTID_COMMON}details-label-delivery-status1` }>
          {`${orderStatus}`}
        </span>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled={ buttonStatus }
        >
          MARCAR COMO ENTREGUE
        </button>
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
          {order.products?.map((product, index) => (
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
        { 'Total: ' }
        {`${order.totalPrice?.replace(/\./, ',')}`}
      </h1>
    </main>
  );
}

export default CustomerOrderDetails;
