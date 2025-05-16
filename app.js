const express = require("express");
const app = express();
const port = 3000;

const postRouter = require("./routers/posts");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

const { posts } = require("./data/db");

app.use(express.json());
app.use(express.static("public"));
app.use("/posts", postRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log("server listening on http://localhost:" + port);
});
