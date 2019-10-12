'use strict'

module.exports = (req, res, next) => {
  console.log('404');
  res.status(404).send('Not found the page');
};