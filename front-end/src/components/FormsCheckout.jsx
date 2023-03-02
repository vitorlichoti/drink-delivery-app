import React from 'react';

function Forms() {
  return (
    <main>
      <div>
        <h1>Detalhes e Endereço para Entrega</h1>
        <form>
          P. Vendedora Responsável:
          <select
            id="select-seller"
            data-testid="customer_checkout__select-seller"
          >
            <option value="vender">vender</option>
          </select>
          Endereço
          <input
            type="text"
            name="input-adress"
            data-testid="customer_checkout__input-address"
          />
          Número
          <input
            type="text"
            name="input-adress-number"
            data-testid="customer_checkout__input-address-number"
          />
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
          >
            FINALIZAR PEDIDO
          </button>
        </form>
      </div>
    </main>
  );
}

export default Forms;
