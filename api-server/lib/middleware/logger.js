module.exports = (req, res, next) => {
  let startDate = new Date();
  console.log(`${req.method} ${req.path}`);

  req.requestTime = startDate;

  next();

  let endDate = new Date();
console.log(`${req.method} ${req.path} done in ${endDate - startDate}ms`);
};