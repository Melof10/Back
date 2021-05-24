const express = require('express');
const router = express.Router();
const { getPosts, getPost } = require('../controllers/post');
const { GET_POSTS, GET_POST } = require('../constants');

/* GET posts */
router.get(GET_POSTS, getPosts);

/* GET post */
router.get(GET_POST, getPost);

module.exports = router;