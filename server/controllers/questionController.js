// const { Questions } = require('../db/models/models')
//
// class QuestionsController {
//
//     async getQuestions(req, res) {
//         const { id } = req.params
//         const groupToTopic = await Topic.findAll({where: {groupId: id}})
//         res.json(groupToTopic)
//     }
//
//     async getAllGroup(req, res) {
//         const groups = await Group.findAll()
//         res.json(groups)
//     }
//
// }
//
// module.exports = new QuestionsController()
