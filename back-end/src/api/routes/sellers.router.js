const express = require('express');

const route = express.Router();

const controller = require('../controller/sellers.controller');
const validateJWT = require('../JWT/validateJWT');

route.get('/sellers', validateJWT, controller.getAllSellers);

module.exports = route;