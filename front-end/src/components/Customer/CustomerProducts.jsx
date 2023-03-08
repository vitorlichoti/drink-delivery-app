import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import httpRequestAxios from '../../utils/httpRequestAxios';
import {
  addProductToCart,
  decreaseCartProduct,
  readCartStorage,
  changeCartProduct,
} from '../../utils/localStorage';

import '../Style/CustomerProducts.css';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [quantityList, setQuantityList] = useState({});

  const navigate = useNavigate();

  async function getAllProducts() {
    const productsListStorage = readCartStorage();
    const newQuantity = {};
    const allProducts = await httpRequestAxios('get', 'http://localhost:3001/customer/products');
    allProducts.data.forEach((product) => {
      const { quantity } = productsListStorage
        .find(({ id }) => id === product.id) || { quantity: 0 };
      newQuantity[product.id] = quantity;
    });
    setQuantityList(newQuantity);
    setProducts(allProducts.data);
  }

  async function getTotalValue() {
    const productsListStorage = readCartStorage();
    let newValue = 0;
    productsListStorage.forEach(({ price, quantity }) => {
      newValue += price * quantity;
    });
    setTotalValue(newValue.toFixed(2));
  }

  async function onLoad() {
    await getAllProducts();
    getTotalValue();
  }

  useEffect(() => {
    if (!products.length) onLoad();
  });

  return (
    <div style={ { display: 'flex', flexWrap: 'wrap' } }>
      {
        products.map((product) => (
          <div key={ product.id }>
            <span>
              R$
              { ' ' }
            </span>
            <span data-testid={ `customer_products__element-card-price-${product.id}` }>
              {product.price.replace(/\./, ',')}
            </span>
            <img
              style={ { width: '150px' } }
              data-testid={ `customer_products__img-card-bg-image-${product.id}` }
              alt={ product.name }
              src={ product.urlImage }
            />
            <p data-testid={ `customer_products__element-card-title-${product.id}` }>
              {product.name}
            </p>
            <button
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              type="button"
              onClick={ () => {
                decreaseCartProduct(product.id);
                onLoad();
              } }
            >
              -
            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              type="number"
              min={ 0 }
              value={ quantityList[product.id] }
              onChange={ ({ target }) => {
                changeCartProduct(product, target.value);
                onLoad();
              } }
            />
            <button
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              type="button"
              onClick={ () => {
                addProductToCart(product);
                onLoad();
              } }
            >
              +
            </button>
          </div>
        ))
      }
      <button
        data-testid="customer_products__button-cart"
        className="button-cart"
        type="button"
        disabled={ Number(totalValue) === 0 }
        onClick={ () => navigate('/customer/checkout') }
      >
        <p>Ver Carrinho: R$</p>
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          { String(totalValue).replace(/\./, ',') }
        </p>
      </button>
    </div>
  );
}

export default CustomerProducts;
