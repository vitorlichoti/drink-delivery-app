import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import httpRequestAxios from '../../utils/httpRequestAxios';
import '../Style/SellerOrdersCard.css';

function SellerOrdersCard() {
  const [sales, setSales] = useState([]);

  function formatDate(inputDate) {
    const input = new Date(inputDate);

    let date = input.getDate();
    let month = input.getMonth() + 1;
    const year = input.getFullYear();

    date = date
      .toString()
      .padStart(2, '0');

    month = month
      .toString()
      .padStart(2, '0');

    return `${date}/${month}/${year}`;
  }

  const navigate = useNavigate();

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
    <section className="sellerAllCards">
      {sales.map((sale) => (
        <button
          key={ sale.id }
          type="button"
          onClick={ () => {
            navigate(`/seller/orders/${sale.id}`);
          } }
          className="sellerCard"
        >
          <div
            className="sellerCardId"
            data-testid={ `seller_orders__element-order-id-${sale.id}` }
          >
            <div className="sellerPedido">Pedido</div>
            {(`000${sale.id}`).slice(sale.id.toString().length - 1)}
          </div>
          <section className="sellerCardStatusDatePrice">
            <div
              className={ `sellerCardStatus${sale.status.replace(/\s/g, '')}` }
              data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
            >
              {sale.status}
            </div>
            <div className="sellerCardDatePrice">
              <div
                data-testid={ `seller_orders__element-order-date-${sale.id}` }
              >
                {formatDate(sale.saleDate)}
              </div>
              <div
                data-testid={ `seller_orders__element-card-price-${sale.id}` }
              >
                {`R$ ${sale.totalPrice.replace(/\./, ',')}`}
              </div>
            </div>
            <div
              className="sellerCardAddress"
              data-testid={ `seller_orders__element-order-date-${sale.id}` }
            >
              {`${sale.deliveryAddress}, ${sale.deliveryNumber}`}
            </div>
          </section>
        </button>))}
    </section>
  );
}

export default SellerOrdersCard;
