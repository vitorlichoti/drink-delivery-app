import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { readCartStorage, readStorage } from '../utils/localStorage';

import httpRequestAxios from '../utils/httpRequestAxios';
import httpCodeHandler from '../assets/httpCodeHandler';

function Forms() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const navigate = useNavigate();

  const { token, id } = readStorage();
  const products = readCartStorage();
  const totalPrice = (products.map((product) => Math
    .round(product.price
      * product.quantity * 100) / 100)
    .reduce((acc, cur) => acc + cur)
    .toFixed(2));

  useEffect(() => {
    async function verifySeller() {
      const { data } = await httpRequestAxios('get', 'http://localhost:3001/sellers', {}, { headers: { Authorization: token } });
      setSellers(data);
    }
    verifySeller();
  });

  const orderFinish = async (event, userData) => {
    event.preventDefault();

    const newData = {
      user_id: id,
      seller_id: userData.seller_id,
      total_price: totalPrice,
      delivery_address: userData.delivery_address,
      delivery_number: userData.delivery_number,
      status: 'PENDING',
      saleProduct: products,
    };
    const { status, data } = await httpRequestAxios('post', 'http://localhost:3001/customer/checkout', newData, { headers: { Authorization: token } });
    if (httpCodeHandler.created(status)) {
      navigate(`/customer/orders/${data.id}`);
    }
  };

  return (
    <main>
      <div>
        <h1>Detalhes e Endereço para Entrega</h1>
        <form>
          P. Vendedora Responsável:
          <select
            name="select"
            id="select"
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
            name="address"
            value={ address }
            onChange={ ({ target }) => setAddress(target.value) }
            data-testid="customer_checkout__input-address"
          />
          Número
          <input
            type="text"
            name="addressNumber"
            value={ addressNumber }
            onChange={ ({ target }) => setAddressNumber(target.value) }
            data-testid="customer_checkout__input-address-number"
          />
          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
            onClick={ (event) => orderFinish(event, {
              seller_id: select.value,
              delivery_address: address,
              delivery_number: addressNumber,
            }) }
          >
            FINALIZAR PEDIDO
          </button>
        </form>
      </div>
    </main>
  );
}

export default Forms;
