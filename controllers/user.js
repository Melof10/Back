const { findByEmail } = require('../querys/user');
const { 
    ERROR_SERVER_CODE, 
    ERROR_SERVER, 
    SUCCESS_CODE, 
    SUCCESS_MESSAGE, 
    ERROR_CLIENT_CODE, 
    ERROR_DATA_NOT_FOUND_MESSAGE 
} = require('../constants');

exports.singIn = async(req, res) => {    
    try {
        const user = await findByEmail(req.body.email);

        if(user){
            res.status(SUCCESS_CODE).send({
                status: SUCCESS_CODE,
                message: SUCCESS_MESSAGE,
                user: user
            });
        }else{
            res.status(ERROR_CLIENT_CODE).send({
                status: ERROR_CLIENT_CODE,
                message: ERROR_DATA_NOT_FOUND_MESSAGE
            })
        }
    } catch (error) {
        res.status().send({
            status: ERROR_SERVER_CODE,
            message: ERROR_SERVER,
            error: error
        })
    }
}