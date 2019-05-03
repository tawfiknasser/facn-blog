const posts = require("./posts");
const like = require("./like");
const editPost = require("./editPost");
const express = require("express");
const {checkauth}=require('../../middlewares/authMid.js');
const router = express.Router();
router.use(checkauth)
router.get("/editPost", editPost.get);
router.post("/saveChanges", editPost.saveChanges);
router.get("/posts", posts.get);
router.get("/addpost", posts.addPostGet);
router.post("/addpost", posts.addPost);
router.post("/like", like.post);
router.post("/editPost", posts.editPost);
router.post("/deleteBlog", posts.deleteBlog);
router.get("*",posts.get)

module.exports = router;
