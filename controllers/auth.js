const { decodedToken } = require('../services/jwt');
const moment = require('moment');
const { findByPk } = require('../querys/user');
const { 
    responseSuccess,     
    responseErrorClient, 
    responseErrorServer,
    responseErrorRefreshToken
} = require('../utils/responseRequest');

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
        responseErrorRefreshToken(res);        
    }else{
        try {
            const { id } = decodedToken(refreshToken);        
            const user = await findByPk(id);
            user ? responseSuccess(res, user) : responseErrorClient(res);            
        } catch (error) {
            responseErrorServer(res, error);
        }        
    }
}