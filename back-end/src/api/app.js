const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const loginRoute = require('../database/routes/login.route');

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(loginRoute);

module.exports = app;
