const service = require('../services/sales.service');

const getAllSales = async (_req, res) => {
  const allSales = await service.getAllSales();
  return res.status(200).json(allSales);
};

const getAllSalesByUserId = async (req, res) => {
  const { email } = req.body
  try {
    const sales = await service.getAllSalesByUserId(email);
    return res.status(200).json(sales);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getAllSales,
  getAllSalesByUserId,
};
