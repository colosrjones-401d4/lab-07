module.exports = ( req, res, next) => {
  console.error();
  res.status(404);
  res.send({ message: err.message, error: err.toString(),
    status: 404,
  });
};