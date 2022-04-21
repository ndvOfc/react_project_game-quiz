const router = require('express').Router();
const stateUserController = require('../controllers/stateController')

router.get('/', stateUserController.getOneUserState)

router.get('/:id', stateUserController.getAllUsersState )

module.exports = router;
