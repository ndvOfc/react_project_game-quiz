const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    sessionScore: { type: DataTypes.INTEGER, defaultValue: 0 },
    totalScore: { type: DataTypes.INTEGER, defaultValue: 0 },
    games: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    rightAnswers: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    wrongAnswers: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    isActivated: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
});

const Group = sequelize.define('group', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    groupName: {type: DataTypes.STRING, allowNull: false},
    groupImage: {type: DataTypes.STRING, allowNull: true},
});

const Topic = sequelize.define('topic', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    topicName: {type: DataTypes.STRING, allowNull: false},
});

const Questions = sequelize.define('questions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    questions: {type: DataTypes.STRING, allowNull: false},
    answers: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
});

Group.hasMany(Topic)
Topic.belongsTo(Group)

Topic.hasMany(Questions)
Questions.belongsTo(Topic)



module.exports = {
    User, Group, Topic, Questions
};

