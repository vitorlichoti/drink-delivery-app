import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import formatDate from '../../utils/formatDates';
import httpRequestAxios from '../../utils/httpRequestAxios';

import handleStatusColor from '../../utils/handleStatusColor';

import '../Style/SellerOrdersInfo.css';
import { FOUR } from '../../assets/constants';

const prefix = 'seller_order_details__';

function SellerOrderInfo() {
  const [sales, setSales] = useState([]);
  const [formatedDate, setFormatedDate] = useState('');
  const [orderStatus, setOrderStatus] = useState();
  const [dispatch, setDispatch] = useState(true);
  const [prepare, setPrepare] = useState(false);
  const { id } = useParams();

  async function updateOrderStatus(status) {
    await httpRequestAxios('put', 'http://localhost:3001/seller/orders', {
      id: sales.id,
      status,
    });
  }

  function prepareButton() {
    setPrepare(true);
    setDispatch(false);
    updateOrderStatus('Preparando');
  }

  function dispatchButton() {
    updateOrderStatus('Em Trânsito');
    setDispatch(true);
  }

  // useEffect(() => {
  //   async function getUpdatedSale() {
  //     const { data } = await httpRequestAxios('get', `http://localhost:3001/customer/orders/${id}`);
  //     setOrderStatus(data.status);
  //     setFormatedDate(formatDate(data.saleDate));
  //     setSales(data);
  //   }
  //   getUpdatedSale();
  // });

  useEffect(() => {
    async function getAllSales() {
      const { data } = await httpRequestAxios('get', `http://localhost:3001/customer/orders/${id}`);
      const date = formatDate(data.saleDate);
      setOrderStatus(data.status);
      setFormatedDate(date);
      setSales(data);
    }
    getAllSales();
  }, [dispatch, prepare, id]);

  useEffect(() => {
    if (sales.status === 'Preparando' || sales.status === 'Entregue') {
      setPrepare(true);
      setDispatch(false);
    }
    if (sales.status === 'Em Trânsito' || sales.status === 'Entregue') {
      setPrepare(true);
      setDispatch(true);
    }
  }, [sales]);

  return (
    <section
      className="container-main"
    >
      <header
        className="seller-order-header"
      >
        <div data-testid={ `${prefix}element-order-details-label-order-id` }>
          PEDIDO
          {' '}
          { sales.id ? sales.id.toString().padStart(FOUR, '0') : null }
        </div>
        <div
          data-testid={ `${prefix}element-order-details-label-order-date` }
        >
          { formatedDate }
        </div>
        <div
          style={ handleStatusColor(orderStatus) }
          data-testid={ `${prefix}element-order-details-label-delivery-status` }
        >
          { orderStatus?.toUpperCase() }
        </div>
        <button
          type="button"
          data-testid={ `${prefix}button-preparing-check` }
          onClick={ () => prepareButton() }
          disabled={ prepare }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid={ `${prefix}button-dispatch-check` }
          onClick={ () => dispatchButton() }
          disabled={ dispatch }
        >
          SAIU PARA ENTREGA
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
          {sales.products?.map((product, index) => (
            <tr
              key={ product.id }
              className="table-rows"
            >
              <td
                data-testid={ `${prefix}element-order-table-item-number${index}` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `${prefix}element-order-table-name${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `${prefix}element-order-table-quantity${index}` }
              >
                {product.SalesProduct.quantity}
              </td>
              <td
                data-testid={ `${prefix}element-order-table-unit-price${index}` }
              >
                { 'R$ '}
                {product.price.replace(/\./, ',')}
              </td>
              <td
                className="seller-sub-total"
                data-testid={ `${prefix}element-order-table-sub-total${index}` }
              >
                { 'R$ '}
                {(Math.round(Number(product.price * product.SalesProduct.quantity) * 100) / 100).toFixed(2).replace(/\./, ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="footer-total">
        <p data-testid={ `${prefix}element-order-total-price` }>
          Total: R$
          {' '}
          {sales.totalPrice?.replace(/\./, ',')}
        </p>
      </footer>
    </section>
  );
}

export default SellerOrderInfo;
