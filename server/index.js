//import of the 'dotenv' module to create a variable environment
require('dotenv').config();
//import the express
const express = require('express');
//created app object
const app = express();
//connect sequelize
const sequelize = require('./db');

//import models
const models = require('./models/models');

const PORT = process.env.PORT || 5000;

//function to connect to the database
const start = async () => {
    try {
        await sequelize.authenticate(); //establishes a connection to the database
        await sequelize.sync(); //checks the status of the database against the data schema
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start()


