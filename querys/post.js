const { apiService } = require('../services/apiService');
const { API_URL_POSTS, REQUEST_METHOD_GET, GET_POSTS_API, GET_POST_API } = require('../constants');

exports.getPosts = async() => {    
    return await apiService({
        API_URL: API_URL_POSTS,
        BASE: GET_POSTS_API,
        METHOD: REQUEST_METHOD_GET
    });
}

exports.getPost = async(id) => {    
    return await apiService({
        API_URL: API_URL_POSTS,
        BASE: GET_POST_API,
        METHOD: REQUEST_METHOD_GET,
        ID: id
    })        
}