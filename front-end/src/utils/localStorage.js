// import axios from "axios";

const USER_STORAGE_KEY = 'user';
const USER_CART_STORAGE_KEY = 'userCart';

function readStorage() {
  return JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || '[]');
}

function readCartStorage() {
  return JSON.parse(localStorage.getItem(USER_CART_STORAGE_KEY) || '[]');
}

function writeStorage(data) {
  localStorage.setItem('user', JSON.stringify(data));
}

function writeCartStorage(data) {
  localStorage.setItem('userCart', JSON.stringify(data));
}

function getCartProducts() {
  return readStorage();
}

function addProductToCart(product) {
  const products = readCartStorage();
  const alreadyInProduct = products.find(({ id }) => id === product.id);
  if (alreadyInProduct) {
    writeCartStorage(
      products.map((currentProduct) => ({
        ...currentProduct,
        quantity:
          currentProduct.id === product.id
            ? currentProduct.quantity + 1
            : currentProduct.quantity,
      })),
    );
  } else {
    writeCartStorage(
      [...products, { ...product, quantity: 1 }],
    );
  }
}

function removeToken() {
  localStorage.clear();
}

function removeProductFromCart(id) {
  const products = readCartStorage();
  const newCart = products.filter((product) => product.id !== id);
  writeCartStorage(newCart);
}

function increaseCartProduct(id) {
  const products = readStorage();
  writeStorage(
    products.map((product) => ({
      ...product,
      length: product.id === id && product.length + 1,
    })),
  );
}

function decreaseCartProduct(id) {
  let products = readCartStorage();
  const alreadyInProduct = products.find((product) => id === product.id);
  if (!alreadyInProduct) return;
  if (Number(alreadyInProduct.quantity) === 1) {
    removeProductFromCart(id);
  }
  products = readCartStorage();
  writeCartStorage(
    products.map((product) => ({
      ...product,
      quantity: product.id === id ? product.quantity - 1 : product.quantity,
    })),
  );
}

function changeCartProduct(product, value) {
  const valueNumber = Number(value);
  const products = readCartStorage();
  const alreadyInProduct = products.find(({ id }) => id === product.id);
  if (!valueNumber) {
    removeProductFromCart(product.id);
    return;
  }
  if (alreadyInProduct) {
    writeCartStorage(
      products.map((currentProduct) => ({
        ...currentProduct,
        quantity:
          currentProduct.id === product.id
            ? valueNumber
            : currentProduct.quantity,
      })),
    );
  } else {
    writeCartStorage(
      [...products, { ...product, quantity: value }],
    );
  }
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
  readCartStorage,
  writeCartStorage,
  changeCartProduct,
};
