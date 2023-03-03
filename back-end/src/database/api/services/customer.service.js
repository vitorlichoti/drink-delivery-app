const { Products, SalesModel, SalesProductsModel } = require('../../database/models');
const { formatedData } = require('../utils/editDateFront');

const getAllProducts = async () => {
  const allProducts = await Products.findAll();
  return allProducts;
};

const createSale = async (checkoutSale) => {
  const { sale, saleProduct } = formatedData(checkoutSale);
  
  const saleCreated = await SalesModel.create(sale);
  await SalesProductsModel.bulkCreate(saleProduct);

  return saleCreated;
};

module.exports = {
  getAllProducts,
  createSale,
};