/*controllers - process incoming http requests, using models and views
to process them, and send some processing result back to the client*/

const {Type, Device} = require('../models/models');
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

    //delete a specific type
    async remove(req, res) {
        try {
            const {id} = req.body;
            const type = await Type.destroy(
                {
                    where: {id}
                })
            return res.json(type);

        } catch (e) {
            console.log("error=>", e)

        }

    }
}





module.exports = new TypeController();

