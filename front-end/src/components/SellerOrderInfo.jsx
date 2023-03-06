import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import httpRequestAxios from '../utils/httpRequestAxios';

const prefix = 'seller_order_details__';

function SellerOrderInfo() {
  const [sales, setSales] = useState([]);
  const { id } = useParams();

  async function getAllSales() {
    const allSales = await httpRequestAxios('get', 'http://localhost:3001/seller/orders');

    setSales(allSales.data);
  }

  async function onLoad() {
    await getAllSales();
  }

  useEffect(() => {
    if (!sales.length) onLoad();
  });
  console.log(sales);
  return (
    <section style={ { display: 'flex', justifyContent: 'space-around' } }>
      <header
        style={ { display: 'flex', justifyContent: 'space-around' } }
      >
        <div data-testid={ `${prefix}element-order-details-label-order-id` }>
          { sales[id - 1]?.id }
        </div>
        <div
          data-testid={ `${prefix}element-order-details-label-order-date` }
        >
          { sales[id - 1]?.date }
        </div>
        <div
          data-testid={ `${prefix}element-order-details-label-delivery-status` }
        >
          { sales[id - 1]?.status }
        </div>
        <button
          type="button"
          data-testid={ `${prefix}button-preparing-check` }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid={ `${prefix}button-dispatch-check` }
        >
          SAIU PARA ENTREGA
        </button>
      </header>
      <footer>
        <p data-testid={ `${prefix}element-order-total-price` }>
          { `Total: ${sales[id - 1]?.totalPrice}` }
        </p>
      </footer>
    </section>
  );
}

export default SellerOrderInfo;
