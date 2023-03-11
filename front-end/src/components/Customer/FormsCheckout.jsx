import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { readCartStorage, readStorage } from '../../utils/localStorage';

import httpRequestAxios from '../../utils/httpRequestAxios';
import httpCodeHandler from '../../assets/httpCodeHandler';

import '../Style/FormsCheckout.css';

function Forms() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const navigate = useNavigate();

  const { token, email } = readStorage();
  const products = readCartStorage();
  const totalPrice = (products.length > 0 ? products.map((product) => Math
    .round(product.price
      * product.quantity * 100) / 100)
    .reduce((acc, cur) => acc + cur)
    .toFixed(2) : '0,00');

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
      userEmail: email,
      sellerId: userData.seller_id,
      totalPrice,
      deliveryAddress: userData.delivery_address,
      deliveryNumber: userData.delivery_number,
      status: 'Pendente',
      saleProduct: products,
    };
    const { status, data } = await httpRequestAxios('post', 'http://localhost:3001/customer/checkout', newData, { headers: { Authorization: token } });
    if (httpCodeHandler.created(status)) {
      localStorage.removeItem('userCart');
      navigate(`/customer/orders/${data.id}`);
    }
  };

  return (
    <main className="container-form-checkout-main">
      <h1 className="form-title">Detalhes e Endereço para Entrega</h1>
      <form className="form-container">
        <div className="seller-name-wrapper">
          <p>P. Vendedora Responsável:</p>
          <select
            name="select"
            id="select"
            data-testid="customer_checkout__select-seller"
          >
            <option value="" selected disabled hidden>Selecione um vendedor...</option>
            {sellers.map((seller, index) => (
              <option
                key={ index }
                value={ `${seller.id}` }
              >
                {`${seller.name}`}
              </option>
            ))}
          </select>
        </div>
        <div className="adress-wrapper">
          <p>Endereço:</p>
          <input
            type="text"
            name="address"
            value={ address }
            onChange={ ({ target }) => setAddress(target.value) }
            data-testid="customer_checkout__input-address"
          />
        </div>
        <div className="number-wrapper">
          <p>Número:</p>
          <input
            type="text"
            name="addressNumber"
            value={ addressNumber }
            onChange={ ({ target }) => setAddressNumber(target.value) }
            data-testid="customer_checkout__input-address-number"
          />
        </div>
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
    </main>
  );
}

export default Forms;
