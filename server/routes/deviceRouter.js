const Router = require('express');
const router = new Router();
const DeviceController = require('../controllers/deviceController');
const checkRole = require("../middleware/checkRoleMiddleware");

//create a device if the user is an administrator
router.post('/', checkRole('ADMIN'), DeviceController.create);

//get the device
router.get('/', DeviceController.getAll);


//get a specific device
router.get('/:id', DeviceController.getOne);


//delete a specific device
router.post('/remove', checkRole('ADMIN'), DeviceController.remove);





module.exports = router;