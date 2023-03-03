import React, { useEffect, useState } from 'react';
// import { readStorage } from '../utils/localStorage';

// import httpRequestAxios from '../utils/httpRequestAxios';

// const TWO_HUNDRED = 200;

function Forms() {
  const [sellers, setSellers] = useState([{
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  }]);

  // const { token } = readStorage();

  // useEffect(() => {
  //   async function verifySeller() {
  //     const { status, data } = await httpRequestAxios('get', 'http://localhost:3001/sellers', {}, { headers: { Authorization: token } });
  //     if (status !== TWO_HUNDRED) {
  //       setSellers(data);
  //     }
  //   }
  //   verifySeller();
  // });

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
            <option value="" selected disabled hidden> </option>
            {sellers.map((seller, index) => (
              <option
                key={ index }
                value={ `${seller.id}` }
              >
                {`${seller.name}`}
              </option>
            ))}
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
