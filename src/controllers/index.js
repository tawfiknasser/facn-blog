const express = require('express');
const posts = require('./posts');
const login = require('./login');
const router = express.Router();

router.get('/posts',posts.get);
router.get('/',login.get)
router.post('/login',login.post);

module.exports = router;
  
