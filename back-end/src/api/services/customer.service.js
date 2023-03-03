const { Products, Sales, SalesProduct } = require('../../database/models');
const { formatedData, formatedSaleProducts } = require('../utils/editDateFront');

const getAllProducts = async () => {
  const allProducts = await Products.findAll();
  return allProducts;
};

const createSale = async (checkoutSale) => {
  const sale = formatedData(checkoutSale);
  
  const { id } = await Sales.create(sale);
  const saleProduct = formatedSaleProducts(checkoutSale.saleProduct, id);

  await SalesProduct.bulkCreate(saleProduct);

  return id;
};

module.exports = {
  getAllProducts,
  createSale,
};