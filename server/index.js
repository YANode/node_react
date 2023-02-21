//import of the 'dotenv' module to create a variable environment
require('dotenv').config();
//import the express
const express = require('express');
//created app object
const app = express();
//connect sequelize
const sequelize = require('./db');

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start()


