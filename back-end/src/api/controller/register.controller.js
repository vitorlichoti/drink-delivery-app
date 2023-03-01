const service = require('../services/register.service');

const isBodyValid = (email, password) => email && password;

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const { type, message } = await service.createUser(name, email, password);

  if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Name, email or password missing.' });
  }
  const { token } = message;

  return res.status(type).json({ name, email, role: 'customer', token });
};

module.exports = {
  register,
};