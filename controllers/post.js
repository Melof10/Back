const { getPosts, getPost } = require('../querys/post');
const {
    SUCCESS_CODE,
    ERROR_CLIENT_CODE,
    ERROR_SERVER_CODE,
    SUCCESS_MESSAGE,
    ERROR_SERVER,
    ERROR_DATA_NOT_FOUND_MESSAGE 
} = require('../constants');

exports.getPosts = async(req, res) => {
    try {
        const posts = await getPosts();
                
        if(posts){
            res.status(SUCCESS_CODE).send({
                status: SUCCESS_CODE,
                message: SUCCESS_MESSAGE,
                posts: posts
            });
        }else{
            res.status(ERROR_CLIENT_CODE).send({
                status: ERROR_CLIENT_CODE,
                message: ERROR_DATA_NOT_FOUND_MESSAGE
            })
        }
    } catch (error) {
        res.status(ERROR_SERVER_CODE).send({
            status: ERROR_SERVER_CODE,
            message: ERROR_SERVER,
            error: error
        })
    }
}

exports.getPost = async(req, res) => {
    try {
        const post = await getPost(req.params.id);
                
        if(post){
            res.status(SUCCESS_CODE).send({
                status: SUCCESS_CODE,
                message: SUCCESS_MESSAGE,
                post: post
            });
        }else{
            res.status(ERROR_CLIENT_CODE).send({
                status: ERROR_CLIENT_CODE,
                message: ERROR_DATA_NOT_FOUND_MESSAGE
            })
        }
    } catch (error) {
        res.status(ERROR_SERVER_CODE).send({
            status: ERROR_SERVER_CODE,
            message: ERROR_SERVER,
            error: error
        })
    }
}