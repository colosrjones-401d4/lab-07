'use strict';

module.exports = (req,res,next) => {
  let dateTime = Date();
  req.requestTime = dateTime.toString();
  next();
};