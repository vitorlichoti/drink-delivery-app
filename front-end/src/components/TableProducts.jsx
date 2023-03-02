import React, { useState } from 'react';
import { readCartStorage, removeProductFromCart } from '../utils/localStorage';

function TableProducts() {
  const [products, setProduts] = useState(readCartStorage());

  const removeItem = (id) => {
    removeProductFromCart(id);
    setProduts(readCartStorage());
  };

  return (
    <main>
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
          { products.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={ `costumer_checkout_
                _element-order-tablet-item-number-${index}` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `costumer_checkout_
                _element-order-tablet-name-${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `costumer_checkout_
                _element-order-tablet-quantity-${index}` }
              >
                {product.quantity}
              </td>
              <td
                data-testid={ `costumer_checkout_
                _element-order-tablet-unit-price-${index}` }
              >
                {product.price}
              </td>
              <td
                data-testid={ `costumer_checkout_
                _element-order-tablet-sub-total-${index}` }
              >
                {Math.round(Number(product.price) * Number(product.quantity) * 100) / 100}
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `costumer_checkout_
                  _element-order-tablet-remove-${index}` }
                  onClick={ () => removeItem(product.id) }
                >
                  Remove
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
      <h1
        data-testid="costumer_checkout_
       _element-order-total-price"
      >
        {products.map((product) => Math
          .round(product.price * product.quantity * 100) / 100)
          .reduce((acc, cur) => acc + cur)}
      </h1>
    </main>
  );
}

export default TableProducts;
