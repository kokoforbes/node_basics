const express = require("express");
const postController = require("../controllers/post");
const validator = require("../validators/index");

const router = express.Router();

router.get("/", postController.getPosts);
router.post("/posts", validator.createPostValidator, postController.createPost);

module.exports = router;
