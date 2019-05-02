const express = require("express");
const signup = require("./signup");
const posts = require("./posts");
const login = require("./login");
const like = require("./like");
const editPost = require("./editPost");
// const error = require('./error');
const router = express.Router();

router.get("/editPost", editPost.get);
router.post("/saveChanges", editPost.saveChanges);

router.get("/posts", posts.get);
router.get("/addpost", posts.addPostGet);
router.post("/addpost", posts.addPost);
router.get("/", login.get);
router.post("/login", login.post);
router.post("/like", like.post);
router.post("/editPost", posts.editPost);
router.post("/deleteBlog", posts.deleteBlog);
router.post("/auth", login.checkauth);
router.get("/signup", signup.get);
router.post("/signup", signup.post);

// router.use(error.client);

module.exports = router;
