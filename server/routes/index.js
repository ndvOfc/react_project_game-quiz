//! ГЛАВНЫЙ API РОУТЕР
const router = require('express').Router();
const userRouter = require('./userRouter');
const groupRouter = require('./groupRoutes')
const stateRouter = require('./stateRoutes')

router.use('/user', userRouter);
router.use('/group', groupRouter);
router.use('/state', stateRouter);


module.exports = router;
