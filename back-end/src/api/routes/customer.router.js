const express = require('express');

const route = express.Router();

const { getAllProducts } = require('../controller/customer.controller');

route.get('/customer/products', getAllProducts);

module.exports = route;