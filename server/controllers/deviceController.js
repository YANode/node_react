/*controllers - process incoming http requests, using models and views
to process them, and send some processing result back to the client*/

const {Device} = require('../models/models');
const ApiError = require('../error/ApiError');
//generates random random id's that will not be repeated
const uuid = require('uuid');//npm i uuid
//set of functions for working with paths in the file system
const path = require('path');


class DeviceController {
    async create(req, res, next) {

        try {
            //get the data from the body of the request
            const {name, price, typeId, brandId, info} = req.body;//'info' - feature array
            //get the file
            const {img} = req.files; // npm i express-fileupload
            //generate a unique name for the resulting file
            const fileName = uuid.v4() + '.jpg'//'uuid.v4' function will generate random ids
            //img.mv - function which moves 'fileName' from the client to the 'static' folder
            //resolve - adapts the specified path to the operating system
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            //created device
            const device = await Device.create({name, price, typeId, brandId, img:fileName});//rating = 0 by defaultValue
            //return device information back to the client
            return res.json(device);

        } catch(e) {
            next(ApiError.badRequest(e.message));
        }


    }

    async getAll(req, res) {

    }

    //the function gets one specific device
    async getOne(req, res) {

    }
}

module.exports = new DeviceController();
