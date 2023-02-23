const Router = require('express');
const router = new Router();

//import all the sub-rooters
const typeRouter = require('./typeRouter');
const brandRouter = require('./brandRouter');
const userRouter = require('./userRouter');
const deviceRouter = require('./deviceRouter');

//establish a link with the sub-rooters
router.use('/user', userRouter);
router.use('/device', deviceRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);





module.exports = router;

