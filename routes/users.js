const express = require('express');
const router = express.Router();
const { singIn } = require('../controllers/user');
const { POST_USER } = require('../constants');

/* POST user */
router.post(POST_USER, singIn);

module.exports = router;