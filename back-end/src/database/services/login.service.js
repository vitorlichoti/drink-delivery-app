const { User } = require('../models')

const md5 = require('md5')

const getUserEmail = (email) => User.findOne({ where: { email }});

const checkLogin = (email, password) => {
  const userInfo = getUserEmail(email);

  if(!userInfo) return { type: 404, message: 'User not found' }

  const cryptPassword = md5(password);

  if(cryptPassword === userInfo.password)  {
    return { type: 200, message: 'token' }
  } 
}


module.exports = {
  checkLogin,
}