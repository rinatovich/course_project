const { Sequelize } = require('sequelize');
const config = require('./config');
module.exports.connection = new Sequelize({
    dialect: 'mysql',
    host: config.HOST,
    username: config.DBUSER,
    password: config.DBPASSWORD,
    database: config.DBNAME
});

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
