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

function addProductToCart(product, value) {
  const products = readCartStorage();
  // if (!products && value !== 0) {
  //   console.log('a');
  //   writeCartStorage(product);
  // }
  const alreadyInProduct = products.find(({ id }) => id === product.id);
  if (alreadyInProduct) {
    writeCartStorage(
      products.map((currentProduct) => ({
        ...currentProduct,
        quantity:
          currentProduct.id === product.id
            ? currentProduct.quantity + Number(value)
            : currentProduct.quantity,
      })),
    );
    return;
  }
  if (Number(value)) {
    writeCartStorage(
      [...products, { ...product, quantity: Number(value) }],
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
      length: product.id === id ? product.length + 1 : product.length,
    })),
  );
}

function decreaseCartProduct(id, value) {
  let products = readCartStorage();
  const alreadyInProduct = products.find((product) => id === product.id);
  if (alreadyInProduct.quantity <= value) {
    removeProductFromCart(id);
  }
  products = readCartStorage();
  writeCartStorage(
    products.map((product) => ({
      ...product,
      quantity: product.id === id ? product.quantity - Number(value) : product.quantity,
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
  readCartStorage,
};
