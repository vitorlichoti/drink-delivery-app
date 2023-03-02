import React from 'react';
import { Link } from 'react-router-dom';

function OrdersCards() {
  // quando vier do banco, refatorar para montar dinamicamente os cards
  // colocar <Link to={ `/customer/orders/${order.id}` }
  return (
    <Link to="/customer/orders/1">
      <div>Pedido</div>
      <div
        data-testid="customer_orders__element-order-id-1"
      >
        1
      </div>
      <div
        data-testid="customer_orders__element-delivery-status-1"
      >
        PENDENTE
      </div>
      <div
        data-testid="customer_orders__element-order-date-1"
      >
        08/03/2021
      </div>
      <div
        data-testid="customer_orders__element-card-price-1"
      >
        53
      </div>
    </Link>
  );
}

export default OrdersCards;
