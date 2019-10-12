'use stict';

const numberWhat = (number) => (req, res, next) => {
  req.number = number * number;
  next();
};
module.exports = numberWhat;