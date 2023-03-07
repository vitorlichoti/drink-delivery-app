const md5 = require('md5');
const { Users } = require('../../database/models');
const jwtVerify = require('../JWT/validateJWT');

const getUserEmail = (email) => Users.findOne({ where: { email } });

const checkToken = (token) => {
  const { type } = jwtVerify(token);

  if (type === 401) {
    return false;
  }

  return true;
};

const createAdminUser = async (data, token) => {
  const userInfo = await getUserEmail(data.email);

  if (userInfo) return { type: 409, message: { message: 'User already exists' } };

  const cryptPassword = md5(data.password);

  const newUser = {
    name: data.name,
    email: data.email,
    password: cryptPassword, 
    role: data.role,
  };

  if (checkToken(token)) {
    const userCreated = await Users.create(newUser);
    return { type: 201, message: userCreated };
  }

  return { type: 401, message: 'Invalid token' };
};

const findAllUsers = async () => {
  const allUsers = await Users.findAll({
    attributes: { exclude: ['password'] },
  });
  return allUsers;
};

const deleteUser = async (id) => {
  const user = await Users.destroy(
    { where: { id } },
  );

  return user;
};

module.exports = {
  createAdminUser,
  findAllUsers,
  getUserEmail,
  deleteUser,
};