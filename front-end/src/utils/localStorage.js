// import axios from "axios";

const TOKEN_STORAGE_KEY = 'token';

function readStorage() {
  return JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY) || '[]');
}

function writeStorage(token) {
  localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token));
}

function getCartProducts() {
  return readStorage();
}

function addProductToCart(product) {
  const products = readStorage();
  const alreadyInProduct = products.find(({ id }) => id === product.id);
  if (alreadyInProduct) {
    writeStorage(
      products.map((currentProduct) => ({
        ...currentProduct,
        length:
          currentProduct.id === product.id
            ? currentProduct.length + 1
            : currentProduct.length,
      })),
    );
    return;
  }
  writeStorage([...products, { ...product, length: 1 }]);
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

function decreaseCartProduct(id) {
  const products = readStorage();
  writeStorage(
    products.map((product) => ({
      ...product,
      length: product.id === id ? product.length - 1 : product.length,
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
