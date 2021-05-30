const { getPhotos, getPhoto } = require('../querys/photo');
const { 
    responseSuccess, 
    responseErrorClient, 
    responseErrorServer 
} = require('../utils/responseRequest');

exports.getPhotos = async(req, res) => {                    
    try {
        const photos = await getPhotos(req.params);
        photos ? responseSuccess(res, photos) : responseErrorClient(res);        
    } catch (error) {
        responseErrorServer(res, error);
    }
}

exports.getPhoto = async(req, res) => {                    
    try {
        const photo = await getPhoto(req.params.id);        
        photo ? responseSuccess(res, photo) : responseErrorClient(res);        
    } catch (error) {
        responseErrorServer(res, error);
    }
}