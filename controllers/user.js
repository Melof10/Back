const { findByEmail } = require('../querys/user');
const { 
    responseSignIn, 
    responseErrorClient, 
    responseErrorServer 
} = require('../utils/responseRequest');

exports.singIn = async(req, res) => {    
    try {
        const user = await findByEmail(req.body);
        user ? responseSignIn(res, user) : responseErrorClient(res);        
    } catch (error) {
        responseErrorServer(res, error);
    }
}