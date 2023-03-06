import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import httpRequestAxios from '../utils/httpRequestAxios';
import { readCartStorage } from '../utils/localStorage';

const prefix = 'seller_order_details__';

function SellerOrderInfo() {
  const [sales, setSales] = useState([]);
  const { id } = useParams();
  const products = readCartStorage();

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

  return (
    <section>
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

      <table style={ { width: '100%' } }>
        <thead>
          <tr style={ { display: 'flex', justifyContent: 'space-around' } }>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={ product.id }>
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
                {product.quantity}
              </td>
              <td
                data-testid={ `${prefix}element-order-table-unit-price${index}` }
              >
                {product.price.replace(/\./, ',')}
              </td>
              <td
                data-testid={ `${prefix}element-order-table-sub-total${index}` }
              >
                {(Math.round(Number(product.price * product.quantity) * 100) / 100).toFixed(2).replace(/\./, ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer>
        <p data-testid={ `${prefix}element-order-total-price` }>
          { `Total: ${sales[id - 1]?.totalPrice}` }
        </p>
      </footer>
    </section>
  );
}

export default SellerOrderInfo;
