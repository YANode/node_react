const Router = require('express');
const router = new Router();
const TypeController = require('../controllers/typeController');


//create a type
router.post('/', TypeController.create);

//get the type
router.get('/', TypeController. getAll);





module.exports = router;
