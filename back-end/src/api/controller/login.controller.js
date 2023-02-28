const service = require('../services/login.service');

const isBodyValid = (email, password) => email && password;

const login = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await service.checkLogin(email, password);

  if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Email or password wrong.' });
  }

  return res.status(type).json(message);
};

module.exports = {
  login,
};