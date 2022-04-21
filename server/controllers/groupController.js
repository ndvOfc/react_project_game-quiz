const { Group, Topic, Questions} = require('../db/models/models')

class GroupController {

    async getGroup(req, res) {
        const { id } = req.params
        const groupToTopic = await Topic.findAll({where: {groupId: id}})
        const questions = await Questions.findAll({where: {topicId: groupToTopic.id}})
        res.json({topics: groupToTopic, questions })
    }

    async getAllGroup(req, res) {
        const groups = await Group.findAll()
        res.json(groups)
    }

}

module.exports = new GroupController()
