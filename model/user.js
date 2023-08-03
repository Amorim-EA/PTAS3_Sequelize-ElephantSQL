const db = require('../config/connection');

const User = db.sequelize.define('Users',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    })
User.sync();
module.exports = User;