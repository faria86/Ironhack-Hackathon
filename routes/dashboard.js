'use strict';

const { Router } = require('express');
const dashboard = new Router();
const routeGuard = require('./../middleware/route-guard');

dashboard.get('/dashboard', routeGuard, (req, res, next) => {
  res.render('dashboard', { title: "I'm in Dashboard" });
});

module.exports = dashboard;
