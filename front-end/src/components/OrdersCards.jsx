import React from 'react';

function OrdersCards() {
  return (
    <div>
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
    </div>
  );
}

export default OrdersCards;
