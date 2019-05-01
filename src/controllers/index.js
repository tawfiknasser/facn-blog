const express = require("express");
const posts = require("./posts");
const login = require("./login");
const like = require("./like");
const editPost = require("./editPost");
const router = express.Router();

router.get("/posts", posts.get);
router.post("/posts", posts.addPost);
router.get("/", login.get);
router.post("/login", login.post);
router.post("/like", like.post);

router.get("/editPost", editPost.get);
router.post("/saveChanges", editPost.saveChanges);
router.post("/deleteBlog", posts.deleteBlog);

module.exports = router;
