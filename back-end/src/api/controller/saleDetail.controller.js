const service = require('../services/saleDetail.service');

const getIdSale = async (req, res) => {
  const { id } = req.params;
  const getSaleDetail = await service.getSale(id);

  return res.status(200).json(getSaleDetail);
};

const updateOrderStatus = async (req, res) => {
  const { id, status } = req.body;
  await service.updateOrderStatus(Number(id), status);

  return res.status(200).json({ status });
};

module.exports = {
  getIdSale,
  updateOrderStatus,
};