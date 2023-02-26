const ApiError = require('../error/ApiError');

//error handing middleware
module.exports = function (err, req, res, next) {
    //check: if the error class belongs to 'ApiError', then
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message});
    }
    return res.status(500).json({message: 'Unexpected error'});
};

