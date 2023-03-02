import React from 'react';
import { useNavigate } from 'react-router-dom';

function SellerOrdersCard() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={ () => {
        navigate('/seller/orders/1');
      } }
    >
      <div
        data-testid="seller_orders__element-order-id-1"
      >
        PEDIDO 0001
      </div>
      <div
        data-testid="seller_orders__element-delivery-status-1"
      >
        PENDENTE
      </div>
      <div
        data-testid="seller_orders__element-order-date-1"
      >
        08/04/2021
      </div>
      <div
        data-testid="seller_orders__element-card-price-1"
      >
        R$ 23,80
      </div>
      Pedidos
    </button>
  );
}

export default SellerOrdersCard;
