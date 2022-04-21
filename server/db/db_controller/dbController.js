
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
    const name = ['name1', 'name2', 'name3'];
    const email = ['n1@mail.ru','n2@mail.ru','n3@mail.ru']
    const password = ['123', '123', '123'];
    
    for (let i=0; i<3; i++) {
      await User.create({
        name: name[i],
        email: email[i],
        password: password[i],
      });
    }

    const  groupName = ['Фильмы', 'Страны', 'Эльбрус']
    const groupImage = ['https://www.soyuz.ru/public/uploads/files/5/6923170/1005x558_20170113134556222f070119.jpg', 
    'https://ic.pics.livejournal.com/dymontiger/54234047/7434083/7434083_original.jpg', 
    'https://i.postimg.cc/Prz81N7T/Fotoram-io-1.jpg'];
    for (let i = 0; i < 3; i++) {
      await Group.create({
        groupName: groupName[i],
        groupImage: groupImage[i],
      });
    }

    const topicName = ['Общие вопросы', 'Комедии', 'Актеры']
    const groupId = 1
    const topicName2 = ['Россия', 'Япония', 'Франция']
    const groupId2 = 2;
    const topicName3 = ['Вопросы1', 'Вопросы2', 'Актеры3']
    const groupId3 = 3;  

    for (let i = 0; i < 3; i++) {
      await Topic.create({
        topicName: topicName[i],
        groupId: groupId,
      });
      await Topic.create({
        topicName: topicName2[i],
        groupId: groupId2,
      });
      await Topic.create({
        topicName: topicName3[i],
        groupId: groupId3,
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
