import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import httpRequestAxios from '../../utils/httpRequestAxios';
import { readStorage } from '../../utils/localStorage';

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
    <div>
      { orders.map((order) => (
        <Link
          key={ order.id }
          to={ `/customer/orders/${order.id}` }
        >
          <div
            data-testid={ `customer_orders__element-order-id-${order.id}` }
          >
            { order.id }
          </div>
          <div
            data-testid={ `customer_orders__element-delivery-status-${order.id}` }
          >
            { order.status }
          </div>
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
            { String(order.totalPrice).replace(/\./, ',') }
          </div>
        </Link>
      )) }
    </div>
  );
}

export default OrdersCards;
