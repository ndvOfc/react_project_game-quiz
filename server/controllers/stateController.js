const { User } = require('../db/models/models')

class StateController {

    async getOneUserState(req, res) {
        const { id } = req.params
        const user = await User.findOne({where: {id}})
        res.json(user)
    }

    async getAllUsersState(req, res) {
        const users = await User.findAll()
        res.json(users)
    }

}

module.exports = new StateController()
