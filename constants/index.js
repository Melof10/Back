module.exports = {
    /***** API URL *****/
    API_URL_POSTS: 'https://jsonplaceholder.typicode.com/posts',
    API_URL_PHOTOS: 'https://jsonplaceholder.typicode.com/photos',

    /***** STATUS CODE *****/
    SUCCESS_CODE: 200,
    ERROR_CLIENT_CODE: 400,
    ERROR_SERVER_CODE: 500,

    /***** METHODS for request *****/
    REQUEST_METHOD_GET: 'GET',

    /***** TABLES for request *****/
    POSTS_TABLE: '/posts',
    PHOTOS_TABLE: '/photos',

    /*****  ROUTES for request  *****/    
    GET_POSTS: '/',     
    GET_POST: '/:id',
    GET_PHOTOS: '/:page/:limit',
    GET_PHOTO: '/:id',
    POST_USER: '/',
    AUTH_REFRESH_ACCESS_TOKEN: '/refresh-access-token',
    // api jsonplaceholder    
    GET_POSTS_API: '/',
    GET_POST_API: '/',
    GET_PHOTOS_API: '/',
    GET_PHOTO_API: '/',

    /***** MESSAGES *****/    
    // success
    SUCCESS_MESSAGE: "INFORMACION ENCONTRADA",
    // failed
    ERROR_SERVER: "ERROR EN EL SERVIDOR",
    ERROR_DATA_NOT_FOUND_MESSAGE: "NO SE ENCONTRO LA INFORMACION SOLICITADA",
    ERROR_REFRESH_TOKEN: 'REFRESH TOKEN EXPIRED',
}