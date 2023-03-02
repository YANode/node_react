const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');

const jsonwebtoken = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');

//create registration
router.post('/registration', UserController.registration);

//create login
router.post('/login', UserController.login);

//check if the user is authorised or not
router.get('/auth', authMiddleware, UserController.check);





module.exports = router;
