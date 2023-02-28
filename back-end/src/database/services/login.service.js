const { Users } = require('../models')
const md5 = require('md5')

const getUserEmail = (email) => Users.findOne({ where: { email }});

const checkLogin = async (email, password) => {
  const userInfo = await getUserEmail(email);

  if(!userInfo) return { type: 404, message: 'User not found' }

  const cryptPassword = md5(password);

  if(cryptPassword === userInfo.password)  {
    return { type: 200, message: 'token' }
  }
  return { type: 404, message: 'Incorrect password' }
}

module.exports = {
  checkLogin,
}