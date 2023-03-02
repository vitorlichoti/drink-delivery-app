import React from 'react';

function SellerOrderInfo() {
  return (
    <section style={ { display: 'flex', justifyContent: 'space-around' } }>
      <div
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        Pedido 0001
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        08/04/2021
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        PENDENTE
      </div>
      <div
        data-testid="seller_order_details__button-preparing-check"
      >
        PREPARAR PEDIDO
      </div>
      <div
        data-testid="seller_order_details__button-dispatch-check"
      >
        SAIU PARA ENTREGA
      </div>
    </section>
  );
}

export default SellerOrderInfo;
