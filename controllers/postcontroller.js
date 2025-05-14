const posts = require("../data/db");

const index = (req, res) => {
  res.json({
    data: posts,
    status: "I miei post",
  });
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  if (!post) {
    return res.status(404).json({
      succes: "OK",
      status: "404",
      message: "Post Not Found",
    });
  }
  res.json({ status: 200, data: post });
};

const store = (req, res) => {
  res.json("Creazione dei post");
};

const update = (req, res) => {
  res.json("Sostituzione dei post");
};

const destroy = (req, res) => {
  res.json("Eliminazione dei post");
};

module.exports = { index, show, store, update, destroy };
