import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getCartProducts } from '../utils/localStorage';

function ProductCart() {
  const [cartProducts, setCartProducs] = useState([]);

  useEffect(() => {
    // obtém todos os produtos ao atualizar a página
    const localCartProducts = getCartProducts();
    setCartProducs(localCartProducts);
  }, [cartProducts]);

  return (
    <div>
      {cartProducts.map}
    </div>
  );
}

export default ProductCart;
