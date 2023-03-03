const { Users } = require('../../database/models');

const findAllSellers = async () => {
  const allSellers = await Users.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password', 'email', 'role'] },
  });
  return allSellers;
};

module.exports = { findAllSellers };