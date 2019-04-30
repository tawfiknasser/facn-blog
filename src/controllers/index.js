const express = require('express');
const posts = require('./posts');
const login = require('./login');
const signup = require('./signup');
const router = express.Router();

router.get('/posts',posts.get);
router.post('/posts',posts.post);
// router.post('/posts',posts.get);
router.get('/',login.get)
router.post('/login',login.post);
// router.get('/signup', signup.get);
router.post('/signup', signup.post)

module.exports = router;
