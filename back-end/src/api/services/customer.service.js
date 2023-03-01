const { Products } = require('../../database/models');

const getAllProducts = async () => {
  const allProducts = await Products.findAll();
  return allProducts;
};

module.exports = {
  getAllProducts,
};