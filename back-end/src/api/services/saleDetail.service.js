const { Sales, Users, Products } = require('../../database/models');

const getSale = async (id) => {
  const allSales = await Sales.findAll({ 
    where: { id },
    include: [
      { model: Users, as: 'seller', attributes: { exclude: ['id', 'email', 'password', 'role'] } },
      { model: Products, as: 'products', attributes: { exclude: ['urlImage'] } },
    ],
   });

  return allSales[0];
};

const updateOrderStatus = async (id, status) => {
  await Sales.update({ status }, { where: { id } });
};

module.exports = {
  getSale,
  updateOrderStatus,
};
