/*controllers - process incoming http requests, using models and views
to process them, and send some processing result back to the client*/

const {Device, DeviceInfo} = require('../models/models');
const ApiError = require('../error/ApiError');
//generates random  id's that will not be repeated
const uuid = require('uuid');//npm i uuid
//set of functions for working with paths in the file system
const path = require('path');


class DeviceController {
    async create(req, res, next) {

        try {
            //get the data from the body of the request
            let {name, price, typeId, brandId, info} = req.body;//'info' - feature array
            //get the file
            const {img} = req.files; // npm i express-fileupload
            //generate a unique name for the resulting file
            const fileName = uuid.v4() + '.jpg'//'uuid.v4' function will generate random ids
            //img.mv - function which moves 'fileName' from the client to the 'static' folder
            //resolve - adapts the specified path to the operating system
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            //created device
            const device = await Device.create({name, price, typeId, brandId, img: fileName});//rating = 0 by defaultValue

            //create characteristic for device
            //if we pass 'info' in the body of the request
            if (info) {
                //when passing data via 'postman -> form-data', it comes as a string. So we'll parse the 'info' array:
                //on the frontend -> to string, and on the backend -> back to backend objects
                info = JSON.parse(info);
                info.forEach(i =>
                    //create characteristic for each element of the array
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    }))
            }

            //return device information back to the client
            return res.json(device);

        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }


    //getting all the devices
    async getAll(req, res) {
        //get the data from the body of the request
        let {brandId, typeId, limit, page} = req.query;
        //pagination on page
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let devices;

        //if brandId, typeId - no -> get all devices;
        if (!brandId && !typeId) {
            //the total count of the items that will be returned by the given query
            devices = await Device.findAndCountAll({limit, offset});
        }

        //filtering by type
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset});
        }

        //filtering by brand
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
        }
        //filtering by brand and type
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset});
        }

        //return array of devices
        return res.json(devices);
    }


    //the function gets one specific device
    async getOne(req, res) {
        //id - the parameter was specified in the router 'router.get('/:id'...)
        const {id} = req.params;
        const device = await Device.findOne(
            //the condition by which this device must be searched for
            {
                where: {id},
                //get array of device characteristics
                include: [{model: DeviceInfo, as: 'info'}]

            }
        );
        return res.json(device);
    }


    async remove(req, res) {
        try {
            const {id} = req.body;
            const device = await Device.destroy(
                {
                    where: {id}
                })
            return res.json(device);

        } catch (e) {
            console.log("error=>", e)

        }

    }


};


module.exports = new DeviceController();
