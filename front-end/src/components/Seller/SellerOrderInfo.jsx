import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import formatDate from '../../utils/formatDates';
import httpRequestAxios from '../../utils/httpRequestAxios';

const prefix = 'seller_order_details__';

const SPACE_AROUND = 'space-around';

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
    <section>
      <header
        style={ { display: 'flex', justifyContent: `${SPACE_AROUND}` } }
      >
        <div data-testid={ `${prefix}element-order-details-label-order-id` }>
          { sales.id }
        </div>
        <div
          data-testid={ `${prefix}element-order-details-label-order-date` }
        >
          { formatedDate }
        </div>
        <div
          data-testid={ `${prefix}element-order-details-label-delivery-status` }
        >
          { orderStatus }
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

      <table style={ { width: '100%' } }>
        <thead>
          <tr style={ { display: 'flex', justifyContent: `${SPACE_AROUND}` } }>
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
              style={ { display: 'flex', justifyContent: `${SPACE_AROUND}` } }
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
                {product.price.replace(/\./, ',')}
              </td>
              <td
                data-testid={ `${prefix}element-order-table-sub-total${index}` }
              >
                {(Math.round(Number(product.price * product.SalesProduct.quantity) * 100) / 100).toFixed(2).replace(/\./, ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer>
        <p data-testid={ `${prefix}element-order-total-price` }>
          { 'Total: ' }
          {sales.totalPrice?.replace(/\./, ',')}
        </p>
      </footer>
    </section>
  );
}

export default SellerOrderInfo;
