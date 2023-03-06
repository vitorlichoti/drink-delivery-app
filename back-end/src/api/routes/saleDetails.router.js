const express = require('express');

const route = express.Router();

const { getIdSale } = require('../controller/saleDetail.controller');

route.get('/customer/orders/:id', getIdSale);

module.exports = route;