
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

  seedDb: async () => {
    const username = ['name1', 'name2', 'name3'];
    const email = ['n1@mail.ru','n2@mail.ru','n3@mail.ru']
    const password = ['123', '123', '123'];
    for (let i=0; i<3; i++) {
      await User.create({
        name: username[i],
        email: email[i],
        password: password[i],
      });
    }
    // while (amount--) {
    //   await User.create({
    //     name: randFullName(),
    //     email: randEmail(),
    //     password: randPassword(),
    //   });
    // }

  }


};

// !necessary for running functions separately
require('make-runnable');
