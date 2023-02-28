const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const loginRoute = require('./routes/login.route');
const registerRoute = require('./routes/register.route');

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(loginRoute);
app.use(registerRoute);

module.exports = app;
