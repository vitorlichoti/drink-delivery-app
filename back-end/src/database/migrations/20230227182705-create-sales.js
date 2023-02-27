'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      sellerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2),
        field: 'total_price',
      },
      deliveryAddress: {
        allowNull: true,
        type: Sequelize.STRING(100),
        field: 'delivery_address',
      },
      deliveryNumber: {
        allowNull: true,
        type: Sequelize.STRING(50),
        field: 'delivery_number',
      },
      saleDate: {
        allowNull: true,
        type: Sequelize.DATE,
        field: 'sale_date',
      },
      status: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  },
};
