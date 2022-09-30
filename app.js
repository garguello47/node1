'use strict';

const express = require('express');
const app = express();
app.use(require('express-status-monitor')());

const routes = require('./routes.js');

app.use(require('express-status-monitor')());
app.use('/',routes);

module.exports = app;