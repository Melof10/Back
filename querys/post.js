const { apiService } = require('../services/apiService');
const { API_URL_POSTS, REQUEST_METHOD_GET, GET_POSTS } = require('../constants');

exports.getPosts = async() => {    
    return await apiService({
        API_URL: API_URL_POSTS,
        BASE: GET_POSTS,
        METHOD: REQUEST_METHOD_GET
    });
}