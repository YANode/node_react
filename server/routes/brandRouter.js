const Router = require('express');
const router = new Router();
const BrandController = require('../controllers/brandController');


//create a brand
router.post('/', BrandController.create);

//get the brand
router.get('/', BrandController.getAll);





module.exports = router;


