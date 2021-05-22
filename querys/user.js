const { User } = require('../database');

exports.findByEmail = async(email) => {
    return await User.findOne({
        where: {
            email: email
        }
    });
}

exports.findByPk = async(id) => {
    return await User.findByPk(id);
}