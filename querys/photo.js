const { apiService } = require('../services/apiService');
const { API_URL_PHOTOS, GET_PHOTOS, REQUEST_METHOD_GET } = require('../constants')

exports.getPhotos = async() => {
    return await apiService({
        API_URL: API_URL_PHOTOS,
        BASE: GET_PHOTOS,
        METHOD: REQUEST_METHOD_GET
    });
}