/*controllers - process incoming http requests, using models and views
to process them, and send some processing result back to the client*/

const {Brand} = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
    async create (req, res) {
        const {name} = req.body;
        const brand = await Brand.create({name});//specify a brand name, id is automatically generated
        return res.json(brand);

    }

    async getAll (req, res) {
        const brands = await Brand.findAll();
        return res.json(brands);//return the entire array of objects to the client
    }
}

module.exports = new BrandController();