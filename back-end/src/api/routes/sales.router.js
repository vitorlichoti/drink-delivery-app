const express = require('express');

const route = express.Router();

const { getAllSales } = require('../controller/sales.controller');

route.get('/seller/orders', getAllSales);

module.exports = route;