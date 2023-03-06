const express = require('express');

const route = express.Router();

const { getAllSales, getAllSalesByUserId } = require('../controller/sales.controller');

route.get('/seller/orders', getAllSales);

route.post('/customer/orders', getAllSalesByUserId);

module.exports = route;