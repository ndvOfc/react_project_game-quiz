const { Group, Topic, Questions} = require('../db/models/models')

class GroupController {

    async getGroup(req, res) {
        const { id } = req.params
        const array = []

        for
        const groupToTopic = await Topic.findAll({where: {groupId: id}, raw: true})

        const questions = await Questions.findAll({where : {topicId : groupToTopic[1].id}})
        res.json({topics: groupToTopic, questions })
    }

    async getAllGroup(req, res) {
        const groups = await Group.findAll()
        res.json(groups)
    }

}

module.exports = new GroupController()
