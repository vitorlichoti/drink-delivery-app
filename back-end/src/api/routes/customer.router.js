const express = require('express');

const route = express.Router();

const { getAllProducts, createSale } = require('../controller/customer.controller');

route.get('/products', getAllProducts);
route.post('/checkout', createSale);

module.exports = route;