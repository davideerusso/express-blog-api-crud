const notFound = (err, req, res, next) => {
  res.status(404);
  res.json({ error: "Not Found" });
};

module.exports = notFound;
