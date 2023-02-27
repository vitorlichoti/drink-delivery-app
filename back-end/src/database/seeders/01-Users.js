// module.exports = {
//   up: async (queryInterface, _Sequelize) => {
//     await queryInterface.bulkInsert('users',
//       [{
//         id: 1,
//         name: 'Lewis Hamilton',
//         email: 'lewishamilton@gmail.com',
//         password: '123456',
//         role: 'seller'
//       },
//       {
//         id: 2,
//         name: 'Lewis aHamilton',
//         email: 'lewishamailton@gmail.com',
//         password: '12345645',
//         role: 'user'
//       },
//       ], { timestamps: false });
//   },

//   down: async (queryInterface, _Sequelize) => {
//     await queryInterface.bulkDelete('users', null, {});
//   },
// };