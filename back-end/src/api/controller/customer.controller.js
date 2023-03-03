const service = require('../services/customer.service');

const getAllProducts = async (_req, res) => {
  const allProducts = await service.getAllProducts();
  return res.status(200).json(allProducts);
};

const createSale = async (_req, res) => {
  // const checkoutSale = req.body;
  // const saleCreated = await service.createSale(checkoutSale);
  return res.status(201).json({ id: 1 });
};

module.exports = {
  getAllProducts,
  createSale,
};
