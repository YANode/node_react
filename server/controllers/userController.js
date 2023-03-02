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
        {id, email, role},//the central part of the jwt token "PAYLOAD" into which the data will be embedded
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

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email: req.body.email}});

        if (!user) {
            return next(ApiError.internal('User not found'))
        }

        //check: the 'password' that the user wrote in the form is the same as the 'user.password' from the database
        let comparePassword = await bcrypt.compareSync(password, user.password);

        if(!comparePassword) {
            return next(ApiError.internal('Wrong password'))
        }

        const token = await generateJwt(user.id, user.email);
        //return token to the client
        return res.json({token});//decoder -> https://jwt.io/


    }


    //generate a new token and send it back to the client
    async check(req, res, next) {
       const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token});
    }
}

module.exports = new UserController();


