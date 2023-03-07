const express = require('express');

const route = express.Router();

const { getIdSale, updateOrderStatus } = require('../controller/saleDetail.controller');

route.get('/customer/orders/:id', getIdSale);

route.put('/seller/orders/', updateOrderStatus);

module.exports = route;