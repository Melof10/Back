const express = require('express');
const router = express.Router();
const { refreshAccessToken } = require('../controllers/auth');
const { AUTH_REFRESH_ACCESS_TOKEN } = require('../constants');

router.post(AUTH_REFRESH_ACCESS_TOKEN, refreshAccessToken);                

module.exports = router;