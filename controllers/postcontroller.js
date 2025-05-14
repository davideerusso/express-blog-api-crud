const { posts } = require("../data/db");

const index = (req, res) => {
  const filterTag = req.query.tags;
  let filteredPostTag = posts;
  let filterdPost = filteredPostTag.filter((postTag) =>
    postTag.tags.includes(filterTag)
  );
  if (!filterdPost) {
    res.status(404).json({
      succes: "OK",
      status: "404",
      message: "Post Not Found",
    });
    return;
  }

  res.json({
    data: filterdPost,
    status: "I miei post",
  });
};

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  if (!post) {
    res.status(404).json({
      succes: "OK",
      status: "404",
      message: "Post Not Found",
    });
    return;
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
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404);
    res.json("404 Not Found");
    return;
  }
  const postIndex = posts.indexOf(post);
  posts.splice(postIndex, 1);
  res.sendStatus(204);
  console.log(posts);
};

module.exports = { index, show, store, update, destroy };
