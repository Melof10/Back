const axios = require('axios');
const { API_URL_PHOTOS } = require('../constants')

exports.getPhotos = async() => {
    return await axios.get(API_URL_PHOTOS);
}