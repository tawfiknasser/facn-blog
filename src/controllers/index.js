const express = require('express');
const posts = require('./posts');
const login = require('./login');
const like = require('./like');

const router = express.Router();

router.get('/posts', posts.get);
router.post('/posts', posts.addPost);
router.get('/', login.get);
router.post('/login', login.post);
router.post('/like', like.post);
router.post('/editPost', posts.editPost);
router.post('/deleteBlog', posts.deleteBlog);
router.post('/auth', login.checkauth);

module.exports = router;
