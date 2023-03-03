const express = require('express');

const route = express.Router();

const { adminRegister, returnDBUsers } = require('../controller/admin.controller');

route.post('/admin/register', adminRegister);
route.get('/admin/users', returnDBUsers);

module.exports = route;