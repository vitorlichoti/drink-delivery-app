const { checkLogin } = require('../services/login.service')

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { type , message } = checkLogin(email, password);

    return res.status(type).json(message)

  } catch(error) {
    console.log(error)
  }
}