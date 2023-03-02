const Router = require('express');
const router = new Router();
const BrandController = require('../controllers/brandController');
const checkRole = require("../middleware/checkRoleMiddleware");


//create a brand if the user is an administrator
router.post('/', checkRole('ADMIN'), BrandController.create);

//get the brand
router.get('/', BrandController.getAll);





module.exports = router;


