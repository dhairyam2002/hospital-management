const {Sequelize} = require('sequelize');

const CONFIG = process.env

const sequelize = new Sequelize(CONFIG.DB_NAME, CONFIG.DB_USER, CONFIG.DB_PASSWORD, {
    host: CONFIG.DB_HOST,
    dialect: CONFIG.DB_DIALECT,
})

module.exports = sequelize;