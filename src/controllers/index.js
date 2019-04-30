const express = require('express');
const posts = require('./posts');
const router = express.Router();

router.get('/posts',posts.get);
router.post('/posts',posts.post);

module.exports = router;