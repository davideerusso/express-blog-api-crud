const express = require("express");
const router = express.Router();
let { posts } = require("../data/db");
const postsController = require("../controllers/postcontroller");

router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/", postsController.store);
router.put("/:id", postsController.update);
router.delete("/:id", postsController.destroy);

module.exports = router;
