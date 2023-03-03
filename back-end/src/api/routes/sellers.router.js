const express = require('express');

const route = express.Router();

const controller = require('../controller/sellers.controller');

route.get('/sellers',controller.getAllSellers);

module.exports = route;