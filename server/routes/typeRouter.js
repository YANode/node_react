const Router = require('express');
const router = new Router();
const TypeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');


//creates a device type if the user is an administrator
router.post('/', checkRole('ADMIN'), TypeController.create);

//get the type
router.get('/', TypeController.getAll);


module.exports = router;

