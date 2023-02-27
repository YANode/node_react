/*controllers - process incoming http requests, using models and views
to process them, and send some processing result back to the client*/



const ApiError = require('../error/ApiError');

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }


    //the function checks whether the user is authorised or not
    async check(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('id not specified'));
        }
        res.json(id);
    }
}

module.exports = new UserController();

