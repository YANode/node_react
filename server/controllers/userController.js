/*controllers - process incoming http requests, using models and views
to process them, and send some processing result back to the client*/


const ApiError = require('../error/ApiError');
//to hash passwords and not store them in clear text
const bcrypt = require('bcrypt'); //npm i bcrypt
//generates a web token
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');

//token creation function
const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'} //how long the token lives
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body;

        //if email or password are blank in the body of the request -> we will return an error
        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect email or password'));
        }

        //check: if there is a user with this email in the system
        const candidate = await User.findOne({where: {email: req.body.email}});
        if (candidate) {
            return next(ApiError.badRequest('User with this email already exists'));
        } else {
            //if the user with this email address is not registered
            const hashPassword = await bcrypt.hash(password, 5);
            const user = await User.create({email, role, password: hashPassword});
            const basket = await Basket.create({userId: user.id});
            const token = generateJwt(user.id, user.email, user.role);
            //return token to the client
            return res.json({token}); //decoder -> https://jwt.io/
        }


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

