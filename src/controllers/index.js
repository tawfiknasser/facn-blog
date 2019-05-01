const express = require('express');
const posts = require('./posts');
const login = require('./login');
const like = require('./like');
const router = express.Router();

router.get('/posts',posts.get);
router.post('/posts',posts.post);
// router.post('/posts',posts.get);
router.get('/',login.get)
router.post('/login',login.post);
router.post('/like',like.post);

module.exports = router;
