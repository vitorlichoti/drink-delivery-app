const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const sellersRoute = require('./routes/sellers.router')
const loginRoute = require('./routes/login.route');
const registerRoute = require('./routes/register.route');
const customerRoute = require('./routes/customer.router');
const adminRoute = require('./routes/admin.router');
const sellerSalesRoute = require('./routes/sales.router');
const token = require('./routes/token.router');

const IMAGES_PATH = path.resolve(__dirname, '../../public');

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(loginRoute);
app.use(adminRoute);
app.use(registerRoute);
app.use('/customer', customerRoute);
app.use(token);
app.use(sellerSalesRoute);
app.use('/images', express.static(IMAGES_PATH));
app.use(sellersRoute);

module.exports = app;
