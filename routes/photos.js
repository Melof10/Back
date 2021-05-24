const express = require('express');
const router = express.Router();
const { getPhotos, getPhoto } = require('../controllers/photo');
const { GET_PHOTOS, GET_PHOTO } = require('../constants');

/* GET photos */
router.get(GET_PHOTOS, getPhotos);

/* GET photo */
router.get(GET_PHOTO, getPhoto);

module.exports = router;