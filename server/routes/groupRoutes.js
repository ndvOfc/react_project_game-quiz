const router = require('express').Router();
const groupController = require('../controllers/groupController')

router.get('/', groupController.getAllGroup)

router.get('/:id', groupController.getGroup )

module.exports = router;
