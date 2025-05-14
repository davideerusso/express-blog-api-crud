const express = require("express");
const router = express.Router();
let { posts } = require("../data/db");

// # INDEX

router.get("/", (req, res) => {
  res.json({
    data: posts,
    status: 200,
  });
});

// # SHOW

router.get("/:id", (req, res) => {
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
});

// # STORE

router.post("/", (req, res) => {
  res.json("Creazione dei post");
});

// # UPDATE

router.put("/:id", (req, res) => {
  res.json("Sostituzione dei post");
});

// # DESTROY

router.delete("/:id", (req, res) => {
  res.json("Eliminazione dei post");
});

module.exports = router;
