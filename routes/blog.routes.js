const express = require('express');
const { createPost, getPosts } = require('../controllers/posts.controller');
const { createComment } = require('../controllers/comments.controller');
const { likePost, unlikePost } = require('../controllers/likes.controller');
const router = express.Router();

router.post('/posts/create', createPost)
router.post('/comments/create', createComment)
router.get('/posts', getPosts)
router.post('/likes/like',likePost)
router.post('/likes/unlike',unlikePost)

module.exports = router;