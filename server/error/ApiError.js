//created a universal handler
class ApiError extends Error {
    constructor(status, message) {
        super(); //calls the parent constructor, necessarily inside our constructor and before using 'this'
        this.status = status;
        this.message = message;
    }

    //create a statics methods that can be called without creating an object
    static badRequest(message) {
        return new ApiError(404, message);
    }

    static internal(message) {
        return new ApiError(500, message);
    }

    static forbidden(message) {
        return new ApiError(403, message);
    }


}

module.exports = ApiError;