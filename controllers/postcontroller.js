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
    data: posts,
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
  const { title, content, image, tags, id } = req.body;

  let maxId = 0;
  for (post of posts) {
    if (post.id > maxId) maxId = post.id;
  }
  const postId = maxId + 1;
  const newPost = { id: postId, title, content, image, tags };
  posts.push(newPost);

  res.json(newPost);
  res.status(201);
};

const update = (req, res) => {
  const idPost = parseInt(req.params.id);
  const { title, content, image, tags } = req.body;

  const post = posts.find((currentPost) => currentPost.id === idPost);
  if (!post) {
    res.status(404).json({
      succes: "OK",
      status: "404",
      message: "Post Not Found",
    });
    return;
  }

  const updatePost = { id: idPost, title, content, image, tags };
  const postIndex = posts.indexOf(post);
  posts.splice(postIndex, 1, updatePost);
  res.json(updatePost);
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
