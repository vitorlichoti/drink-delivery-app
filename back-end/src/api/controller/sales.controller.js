const service = require('../services/sales.service');

const getAllSales = async (_req, res) => {
  const allSales = await service.getAllSales();
  return res.status(200).json(allSales);
};

module.exports = {
  getAllSales,
};
