const { Sales } = require('../../database/models');

const getAllSales = async () => {
  const allSales = await Sales.findAll();
  return allSales;
};

module.exports = {
  getAllSales,
};