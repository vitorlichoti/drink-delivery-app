const { Sales, Users } = require('../../database/models');

const getAllSales = async () => {
  const allSales = await Sales.findAll();
  return allSales;
};

const getAllSalesByUserId = async (email) => {
  const { id } = await Users.findOne({ where: { email } })
  const sales = await Sales.findAll({ where: { userId: id} })
  return sales;
}

module.exports = {
  getAllSales,
  getAllSalesByUserId
};