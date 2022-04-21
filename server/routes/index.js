//! ГЛАВНЫЙ API РОУТЕР
const router = require('express').Router();
const userRouter = require('./userRouter');
const groupRouter = require('./groupRoutes')

router.use('/user', userRouter);
router.use('/group', groupRouter)


module.exports = router;
