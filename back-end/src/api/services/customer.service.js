const { Products, SalesModel } = require('../../database/models');

const getAllProducts = async () => {
  const allProducts = await Products.findAll();
  return allProducts;
};

const createSale = async (checkoutSale) => {
  const {
    user_id,
    seller_id,
    total_price,
    delivery_address,
    delivery_number,
    sale_date,
    status,
  } = checkoutSale;
  
  const saleCreated = await SalesModel.create(sale);
  await SalesModel.bulkCreate(checkoutSale.saleProduct);

  return saleCreated;
};

module.exports = {
  getAllProducts,
  createSale,
};