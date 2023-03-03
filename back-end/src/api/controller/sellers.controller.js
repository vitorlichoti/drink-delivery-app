const service = require('../services/sellers.service');

const getAllSellers = async (_req, res) => {
  const allSellers = await service.findAllSellers();
  return res.status(200).json(allSellers);
};

module.exports = { getAllSellers };
