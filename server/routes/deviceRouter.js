const Router = require('express');
const router = new Router();
const DeviceController = require('../controllers/deviceController');

//create a device
router.post('/', DeviceController.create);

//get the device
router.get('/', DeviceController.getAll);


//get a specific device
router.get('/:id', DeviceController.getOne);





module.exports = router;