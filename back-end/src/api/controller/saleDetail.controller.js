const service = require('../services/saleDetail.service');

const getIdSale = async (req, res) => {
  const { id } = req.params;
  const getSaleDetail = await service.getSale(id);

  return res.status(200).json(getSaleDetail);
};

module.exports = {
  getIdSale,
};