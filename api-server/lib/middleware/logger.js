'use strict';

module.exports = (req,res,next) => {
  console.log('method: ',req.method, 'time: ',req.requestTime, 'path: ', req.path);
  next();
};