require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = 'senhasupersecreta';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const tokenGenerator = (data) => {
  const token = jwt.sign(data, secret, jwtConfig);
  return token;
};

module.exports = tokenGenerator;