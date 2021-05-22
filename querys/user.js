const { User } = require('../database');

exports.findByEmail = async(body) => {
    return await User.findOne({
        where: {
            email: body.email,
            password: body.password
        }
    });
}

exports.findByPk = async(id) => {
    return await User.findByPk(id);
}