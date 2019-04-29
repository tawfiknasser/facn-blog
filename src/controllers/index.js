const express = require('express');
const posts = require('./posts');
const router = express.Router();

router.get('/posts',posts.get);

module.exports = router;