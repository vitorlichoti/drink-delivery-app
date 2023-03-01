import React, { useEffect, useState } from 'react';
import httpRequestAxios from '../utils/httpRequestAxios';

function CustomerProducts() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    const allProducts = await httpRequestAxios('get', 'http://localhost:3001/customer/products');
    setProducts(allProducts.data);
  }

  useEffect(() => {
    // obtém todos os produtos ao atualizar a página
    getAllProducts();
  }, [products]);

  return (
    <div>
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
            >
              -
            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              type="number"
              defaultValue={ 0 }
            />
            <button
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              type="button"
            >
              +
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default CustomerProducts;
