const express = require('express');
const router = express.Router();
const { getPhotos } = require('../controllers/photo');
const { GET_PHOTOS } = require('../constants');

/* GET photos */
router.get(GET_PHOTOS, getPhotos);

module.exports = router;