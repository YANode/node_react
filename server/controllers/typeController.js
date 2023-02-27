/*controllers - process incoming http requests, using models and views
to process them, and send some processing result back to the client*/

const {Type} = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        const {name} = req.body;
        const type = await Type.create({name}); //specify a type name, id is automatically generated
        return res.json(type);

    }

    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json(types);//return the entire array of objects to the client
    }
}

module.exports = new TypeController();

