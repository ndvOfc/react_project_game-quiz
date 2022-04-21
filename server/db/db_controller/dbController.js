
require('dotenv').config();

// connect necessary methods from falso for seeding

const sequelize = require('../db');
const {
    User, Group, Topic, Questions
} = require('../models/models');

module.exports = {
    // sync database
    syncDb: async () => await sequelize.sync(),

    // force sync database (! destroy all data in tables)
    syncDbForce: async () => await sequelize.sync({ force: true }),

    // no comments)))
    dropDb: async () => await sequelize.drop(),


};

// !necessary for running functions separately
require('make-runnable');
