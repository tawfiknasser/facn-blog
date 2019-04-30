const express = require("express");
const posts = require("./posts");
const login = require("./login");
const router = express.Router();

router.get("/", login.get);
router.post("/login", login.post);

router.get("/posts", posts.get);
router.post("/posts", posts.addPost);
router.post("/editPost", posts.editPost);
router.post("/deleteBlog", posts.deleteBlog);

module.exports = router;
