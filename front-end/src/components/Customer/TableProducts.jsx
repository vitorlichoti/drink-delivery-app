import React, { useState } from 'react';
import { readCartStorage, removeProductFromCart } from '../../utils/localStorage';

import '../Style/TableProducts.css';

function TableProducts() {
  const [products, setProduts] = useState(readCartStorage());

  const removeItem = (id) => {
    removeProductFromCart(id);
    setProduts(readCartStorage());
  };

  const TESTID_COMMON = 'customer_checkout__element-order-';

  return (
    <main className="container-table-checkout-main">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover item</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              className="table-rows"
              key={ product.id }
            >
              <td
                data-testid={ `${TESTID_COMMON}table-item-number-${index}` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `${TESTID_COMMON}table-name-${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `${TESTID_COMMON}table-quantity-${index}` }
              >
                {product.quantity}
              </td>
              <td
                data-testid={ `${TESTID_COMMON}table-unit-price-${index}` }
              >
                {product.price.replace(/\./, ',')}
              </td>
              <td
                data-testid={ `${TESTID_COMMON}table-sub-total-${index}` }
              >
                {(Math.round(Number(product.price * product.quantity) * 100) / 100).toFixed(2).replace(/\./, ',')}
              </td>
              <td className="table-button">
                <button
                  type="button"
                  data-testid={ `${TESTID_COMMON}table-remove-${index}` }
                  onClick={ () => removeItem(product.id) }
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="footer-checkout-total">
        <h1
          data-testid={ `${TESTID_COMMON}total-price` }
        >
          TOTAL: R$
          {' '}
          {products.length > 0
            ? products.map((product) => Math
              .round(product.price
                * product.quantity * 100) / 100)
              .reduce((acc, cur) => acc + cur)
              .toFixed(2).replace(/\./, ',')
            : null}
        </h1>
      </footer>
    </main>
  );
}

export default TableProducts;
