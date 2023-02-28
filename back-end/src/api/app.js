const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

const apiRoutes = express.Router();

app.get('/coffee', (_req, res) => res.status(418).end());

apiRoutes.post('/login', routes.loginController);

module.exports = app;
