const Router = require('express');
const router = new Router();
const BrandController = require('../controllers/brandController');
const checkRole = require("../middleware/checkRoleMiddleware");


//create a brand if the user is an administrator
router.post('/', checkRole('ADMIN'), BrandController.create);

//get the brand
router.get('/', BrandController.getAll);

router.post('/remove', checkRole('ADMIN'), BrandController.remove);



module.exports = router;


