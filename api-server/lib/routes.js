'use strict';

const express = require('express');
const newTerror = require('./middleware/newTerror');
const app = routeWhere;


let routeWhere = express.newTerror();


routeWhere.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

routeWhere.get('/d', newTerror, (req,res) => {
  res.status(200).send('Route D');
});
module.exports = routeWhere;