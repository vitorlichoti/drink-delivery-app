const service = require('../services/customer.service');

const getAllProducts = async (_req, res) => {
  const allProducts = await service.getAllProducts();
  return res.status(200).json(allProducts);
};

module.exports = {
  getAllProducts,
};
