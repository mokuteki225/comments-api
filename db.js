const Sequelize = require('sequelize');
const config = require('./config.json');
const sequelize = new Sequelize('comments', config.dbLogin, config.dbPass, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;