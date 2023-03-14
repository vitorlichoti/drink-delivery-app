import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FOUR } from '../../assets/constants';
import httpRequestAxios from '../../utils/httpRequestAxios';
import { readStorage } from '../../utils/localStorage';

import '../Style/CustomerOrdersCards.css';

function OrdersCards() {
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    const { email } = readStorage();
    const orderList = await httpRequestAxios('post', 'http://localhost:3001/customer/orders', { email });
    setOrders(orderList.data);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="customerAllCards">
      { orders?.map((order) => (
        <Link
          className="customerCard"
          key={ order.id }
          to={ `/customer/orders/${order.id}` }
        >
          <div
            className="customerCardId"
            data-testid={ `customer_orders__element-order-id-${order.id}` }
          >
            <div className="costumerPedido">Pedido</div>
            { order.id ? order.id.toString().padStart(FOUR, '0') : null }
          </div>
          <section className="customerCardStatusDatePrice">
            <div
              className={ `customerCardStatus${order.status.replace(/\s/g, '')}` }
              data-testid={ `customer_orders__element-delivery-status-${order.id}` }
            >
              { order.status }
            </div>
            <div className="customerCardDatePrice">
              <div
                data-testid={ `customer_orders__element-order-date-${order.id}` }
              >
                { `${order.saleDate
                  .split('-')[2].split('T')[0]}/${order.saleDate
                  .split('-')[1]}/${order.saleDate.split('-')[0]}` }
              </div>
              <div
                data-testid={ `customer_orders__element-card-price-${order.id}` }
              >
                R$
                {' '}
                { String(order.totalPrice).replace(/\./, ',') }
              </div>
            </div>
          </section>
        </Link>
      )) }
    </div>
  );
}

export default OrdersCards;
