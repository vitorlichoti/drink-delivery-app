// import axios from "axios";

const USER_STORAGE_KEY = 'user';
const CART_STORAGE_KEY = 'userCart';

function readStorage() {
  return JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || '[]');
}

function writeStorage(data) {
  localStorage.setItem('user', JSON.stringify(data));
}

function getCartProducts() {
  return readStorage();
}

function addProductToCart(product, qntt) {
  console.log('a');
  // const products = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
  // if (products.length === 0) {
  //   localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(product));
  // }
  // console.log(products);
  // const alreadyInProduct = products.find(({ id }) => id === product.id);
  // if (alreadyInProduct) {
  //   writeStorage(
  //     products.map((currentProduct) => ({
  //       ...currentProduct,
  //       length:
  //         currentProduct.id === product.id
  //           ? currentProduct.length + 1 * `${qntt}`
  //           : currentProduct.length,
  //     })),
  //   );
  //   return;
  // }
  // writeStorage([...products, { ...product, length: 1 }]);
}

function removeToken() {
  localStorage.clear();
}

function removeProductFromCart(id) {
  const products = readStorage();
  writeStorage(products.filter((product) => product.id !== id));
}

function increaseCartProduct(id) {
  const products = readStorage();
  writeStorage(
    products.map((product) => ({
      ...product,
      length: product.id === id ? product.length + 1 : product.length,
    })),
  );
}

function decreaseCartProduct(id, qntt) {
  const products = readStorage();
  writeStorage(
    products.map((product) => ({
      ...product,
      length: product.id === id ? product.length - qntt : product.length,
    })),
  );
}

export {
  readStorage,
  writeStorage,
  addProductToCart,
  getCartProducts,
  removeProductFromCart,
  increaseCartProduct,
  decreaseCartProduct,
  removeToken,
};
