const service = require('../services/admin.service');

const isBodyValid = (data) => data.name && data.email && data.password && data.role;

const adminRegister = async (req, res) => {
  const data = req.body;
  const { authorization } = req.headers;
  const { type, message } = await service.createAdminUser(data, authorization);

  if (!isBodyValid(data)) {
    return res.status(400).json({ message: 'Name, email or password missing.' });
  }

  return res.status(type).json(message);
};

const returnDBUsers = async (_req, res) => {
  const requestUsers = await service.findAllUsers();

  return res.status(200).json(requestUsers);
};

const adminDeletUser = async (req, res) => {
  const { id } = req.body;
  const userDeleted = await service.deleteUser(id);

  return res.status(200).json(userDeleted);
};

module.exports = {
  adminRegister,
  returnDBUsers,
  adminDeletUser,
};