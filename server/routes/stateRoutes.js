const router = require('express').Router();
const stateUserController = require('../controllers/stateController')

router.get('/', stateUserController.getAllUsersState)

router.get('/:id', stateUserController.getOneUserState )

module.exports = router;
