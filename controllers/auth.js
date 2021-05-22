const { createAccessToken, decodedToken } = require('../services/jwt');
const moment = require('moment');
const { findByPk } = require('../querys/user');
const { 
    SUCCESS_CODE, 
    SUCCESS_MESSAGE, 
    ERROR_CLIENT_CODE, 
    ERROR_DATA_NOT_FOUND_MESSAGE, 
    ERROR_SERVER_CODE, 
    ERROR_SERVER,
    ERROR_REFRESH_TOKEN 
} = require('../constants');

willExpireToken = (token) => {
    const { exp } = token;
    const currentDate = moment().unix();

    if(currentDate > exp){
        return true;
    }

    return false;
}

exports.refreshAccessToken = async(req, res) => {
    const { refreshToken } = req.body;
    const isTokenExpired = willExpireToken(refreshToken);

    if(isTokenExpired){
        res.status(ERROR_CLIENT_CODE).send({
            message: ERROR_REFRESH_TOKEN
        })
    }else{
        try {
            const { id } = decodedToken(refreshToken);        
            const user = await findByPk(id);
            
            if(user){
                res.status(SUCCESS_CODE).send({
                    status: SUCCESS_CODE,
                    message: SUCCESS_MESSAGE,
                    accessToken: createAccessToken(user),
                    refreshToken: refreshToken,
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
}