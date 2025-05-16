const errorHandler = (err, req, res, next) => {
  res.status(500);
  res.json({ error: "Page not Found" });
};

module.exports = errorHandler;
