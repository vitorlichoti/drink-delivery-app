const md5 = require('md5');
const { Users } = require('../../database/models');
const tokenGenerator = require('../JWT/createJWT');

const getUserEmail = (email) => Users.findOne({ where: { email } });

const createUser = async (name, email, password) => {
  const userInfo = await getUserEmail(email);

  if (userInfo) return { type: 409, message: { message: 'User already exists' } };

  const cryptPassword = md5(password);

  const newUser = {
    name,
    email,
    password: cryptPassword, 
    role: 'customer',
  };

  const userCreated = await Users.create(newUser);

  const { role } = userCreated;
  const data = { role };
  const token = tokenGenerator(data);

  return { type: 201, message: { token } };
};

module.exports = {
  createUser,
};