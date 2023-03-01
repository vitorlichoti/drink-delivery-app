const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = 'secret_key';

const jwtVerify = (token) => {
  if (!token) {
    return { type: 404, message: 'Token not found' };
  }

  try {
    const decoded = jwt.verify(token, secret);
    return { type: 200, message: decoded };
  } catch (error) {
    return { type: 401, message: 'Invalid token' };
  }
};

module.exports = jwtVerify;