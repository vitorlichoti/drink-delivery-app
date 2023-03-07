const express = require('express');

const route = express.Router();

const { adminRegister, returnDBUsers, adminDeletUser } = require('../controller/admin.controller');

route.post('/admin/register', adminRegister);
route.get('/admin/users', returnDBUsers);
route.delete('/admin/delete/user', adminDeletUser)

module.exports = route;