const { getPosts, getPost } = require('../querys/post');
const { 
    responseSuccess, 
    responseErrorClient, 
    responseErrorServer 
} = require('../utils/responseRequest');

exports.getPosts = async(req, res) => {
    try {
        const posts = await getPosts();        
        posts ? responseSuccess(res, posts) : responseErrorClient(res);                    
    } catch (error) {
        responseErrorServer(res, error);
    }
}

exports.getPost = async(req, res) => {
    try {
        const post = await getPost(req.params.id);                
        post ? responseSuccess(res, post) : responseErrorClient(res);                    
    } catch (error) {
        responseErrorServer(res, error);
    }
}