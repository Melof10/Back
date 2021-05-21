const axios = require('axios');
const { API_URL_POSTS } = require('../constants');

exports.getPosts = async() => {    
    return await axios.get(API_URL_POSTS);    
}