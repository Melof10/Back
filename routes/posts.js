const express = require('express');
const router = express.Router();
const { getPosts } = require('../controllers/post');
const { GET_POSTS } = require('../constants');

/* GET posts */
router.get(GET_POSTS, getPosts);

module.exports = router;