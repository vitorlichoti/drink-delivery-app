// module.exports = {
//   up: async (queryInterface, _Sequelize) => {
//     await queryInterface.bulkInsert('sales',
//       [{
//         id: 1,
//         user_id: 1,
//         seller_id: 2,
//         total_price: 10.76,
//         delivery_address: 'admin',
//         delivery_number: 'sdasd',
//         sale_date: new Date('2011-08-01T19:58:00.000Z'),
//         status: 'asd',
//       },
//       {
//         id: 2,
//         user_id: 2,
//         seller_id: 1,
//         total_price: 9.09,
//         delivery_address: 'user',
//         delivery_number: 'aaa',
//         sale_date: new Date('2011-08-01T19:58:51.000Z'),
//         status: '325'
//       },
//       ], { timestamps: false });
//   },

//   down: async (queryInterface, _Sequelize) => {
//     await queryInterface.bulkDelete('sales', null, {});
//   },
// };