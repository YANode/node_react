//our middleware -> there we decode the token and check its validity
const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {

    if (req.method === "OPTIONS") {//interested only in POST, GET, PUT, DELETE
        next();
    }


    try {
        //pull the token from the header line
        const token = req.headers.authorization.split(' ')[1] //Bearer token

        if (!token) {
            return res.status(401).json({message: 'User is not authorised'});
        }

        //checking the token for validity
        let decoded = jwt.verify(token, process.env.SECRET_KEY);
        //in all functions this user will be available
        req.user = decoded;
        //call the next middleware in the chain
        next();

    } catch (e) {
        res.status(401).json({message: '401 - User is not authorised'});
    }
}
