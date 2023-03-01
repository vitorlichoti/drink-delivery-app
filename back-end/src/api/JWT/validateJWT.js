const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = 'secret_key';

const jwtVerify = (token) => {
  if (!token) {
    return { type: 404, message: 'Token not found' };
  }

  const decoded = jwt.verify(token, secret);

  if (decoded.role !== 'administrator') {
    return { type: 404, message: 'Access denied' };
  }
};

module.exports = jwtVerify;