const express = require("express");
const app = express();
const port = 3000;

const postRouter = require("./routers/posts");

const { posts } = require("./data/db");

app.use("/posts", postRouter);

app.use(express.static("public"));

app.listen(port, () => {
  console.log("server listening on http://localhost:" + port);
});
