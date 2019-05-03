const posts = require("./posts");
const login = require("./login");
const like = require("./like");
const editPost = require("./editPost");
const express = require("express");

const router = express.Router();


router.get("/editPost", editPost.get);
router.post("/saveChanges", editPost.saveChanges);
router.get("/posts", posts.get);
router.get("/addpost", posts.addPostGet);
router.post("/addpost", posts.addPost);
router.post("/login", login.post);
router.post("/like", like.post);
router.post("/editPost", posts.editPost);
router.post("/deleteBlog", posts.deleteBlog);
router.post("/auth", login.checkauth);

module.exports = router;
