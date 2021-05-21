const { getPhotos } = require('../querys/photo');
const {
    SUCCESS_CODE,
    ERROR_CLIENT_CODE,
    ERROR_SERVER_CODE,
    SUCCESS_MESSAGE,
    ERROR_SERVER,
    ERROR_DATA_NOT_FOUND_MESSAGE 
} = require('../constants');

exports.getPhotos = async(req, res) => {
    try {
        const photos = await getPhotos();
        if(photos){
            res.status(SUCCESS_CODE).send({
                status: SUCCESS_CODE,
                message: SUCCESS_MESSAGE,
                photos: photos.data
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