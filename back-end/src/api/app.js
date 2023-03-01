const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const loginRoute = require('./routes/login.route');
const registerRoute = require('./routes/register.route');
const customerRoute = require('./routes/customer.router');
const token = require('./routes/token.router')

const IMAGES_PATH = path.resolve(__dirname, '../../public');

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(loginRoute);
app.use(registerRoute);
app.use(customerRoute);
app.use(token);
app.use('/images', express.static(IMAGES_PATH));

module.exports = app;
