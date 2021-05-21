const { apiService } = require('../services/apiService');
const { API_URL_PHOTOS, REQUEST_METHOD_GET, GET_PHOTOS_API } = require('../constants')

exports.getPhotos = async(params) => {      
    return await apiService({
        API_URL: API_URL_PHOTOS,
        BASE: GET_PHOTOS_API,
        METHOD: REQUEST_METHOD_GET,
        page: params.page,
        limit: params.limit
    });
}