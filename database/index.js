const db = require('../models');
const userModel = require('../models/user');

const User = userModel(db.sequelize, db.Sequelize);

// async db
db.sequelize
    .sync({ force: false })
    .then(console.log("Correct async"))
    .catch((e) => console.log("ERROR  :  ", e));

module.exports = {
    User
}