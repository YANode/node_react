//configure the connection to the database
require('dotenv').config();
//importing sequelize
const {Sequelize} = require('sequelize');

//let's destructurise  and exporting a new object
module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)