module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        id: 1,
        user_id: 3,
        seller_id: 1,
        total_price: 249,
        delivery_address: 'Rua Xablau',
        delivery_number: '69',
        sale_date: new Date(),
        status: 'ENTREGUE'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};