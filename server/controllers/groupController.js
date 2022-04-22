const { Group, Topic, Questions} = require('../db/models/models')

class GroupController {

    async getGroup(req, res) {
        const { id } = req.params
        const array = []
        const questionsArray = []

        const topicNames =  await Topic.findAll({where: {groupId:id }, raw:true})

        for (let i = 0; i < topicNames.length; i ++) {
            array.push(
                { topic: topicNames[i].topicName,
                  questions: await Questions.findAll({where : {topicId : topicNames[i].id}, raw:true})
                }
            )
        }

        res.json(array)
    }

    async getAllGroup(req, res) {
        const groups = await Group.findAll()
        res.json(groups)
    }

}

module.exports = new GroupController()
