'use strict';

const express = require('express');
const errorHandler = require('./api-server/lib/middleware/errorhandler');
const notFoundpage = require('./api-server/lib/middleware/404handler');
const timeWhat = require('./api-server/lib/middleware/requestTime');
const logger = require('./api-server/lib/middleware/logger');
const routeWhere = require('./api-server/lib/routes');
const numberWhat = require('./api-server/lib/middleware/numbers');

const app = express();

let db = [];

app.use(express.json());

//middleware

app.use(timeWhat);
app.use(logger);
app.use(routeWhere);

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', numberWhat(4), (req,res) => {
  res.status(200).send(`${req.number}`);
});


app.use('*', notFoundpage);
app.use(errorHandler);

// Route to Get All Categories
app.get('/categories', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

// Route to Create a Category
app.post('/categories', (req, res, next) => {
  let record = req.body;
  record.id = Math.random();
  db.push(record);
  res.json(record);
});

// Don't listen if imported into tests
if (!module.parent) {
  let PORT = process.env.PORT || 8080;
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
}

module.exports = { server: app };
