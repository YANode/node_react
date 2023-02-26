//import of the 'dotenv' module to create a variable environment
require('dotenv').config();
//import the express
const express = require('express');
//created app object
const app = express();
//connect  - interaction  'Node.js - relational databases' without SQL queries
const sequelize = require('./db');
//import models
const models = require('./models/models');
//import packet cors - to send requests from a browser
const cors = require('cors');
//import main router
const router = require('./routes/index');
//import our middleware
const errorHandler = require('./middleware/ErrorHandingMiddleware');


const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', router);

//error handling - last middleware
app.use(errorHandler);


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

start();




