
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
    const email = ['n1@mail.ru', 'n2@mail.ru', 'n3@mail.ru']
    const password = ['123', '123', '123'];

    for (let i = 0; i < 3; i++) {
      await User.create({
        name: name[i],
        email: email[i],
        password: password[i],
      });
    }

    const groupName = ['Фильмы', 'Страны', 'Эльбрус']
    const groupImage = ['https://www.soyuz.ru/public/uploads/files/5/6923170/1005x558_20170113134556222f070119.jpg',
      'https://ic.pics.livejournal.com/dymontiger/54234047/7434083/7434083_original.jpg',
      'https://i.postimg.cc/Prz81N7T/Fotoram-io-1.jpg'];
    for (let i = 0; i < 3; i++) {
      await Group.create({
        groupName: groupName[i],
        groupImage: groupImage[i],
      });
    }

    const topicName = ['Общие вопросы', 'Властелин колец', 'Роль - актер']
    const groupId = 1
    const topicName2 = ['Россия', 'Япония', 'Франция']
    const groupId2 = 2;
    const topicName3 = ['Вопросы1', 'Вопросы2', 'Вопросы3']
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
//1
    const grq1 = ['В каком фильме главный герой перемещается в прошлое и знакомится со своими родителями?',
      'В какую женщину был влюблён Шерлок Холмс из британскогого сериала «Шерлок»?',
      'Как звали двух главных злодеев в фильме «Один дома»?',
      'Назовите учителя Брюса Ли, именем которого назвали фильм',
      'Что происходило с главным героем фильма «Загадочная история Бенджамина Баттона»?'
    ]
    const gra1 = ['Назад в будущее,Терминатор,Бэтмен,Довод',
      'Ирэн Адлер,Ева Грин,Миссис Хадсон,Ватсон 0_о',
      'Гарри и Марвин,Чип и Дэйл,Сид и Нэнси,Биба и Боба',
      'Ип Ман,Лю Канг,Кинг Конг,Ву Танг',
      'он родился старым и молодел,он родился молодым и старел,он родился богатым и беднел,он родился пьяным и трезвел'
    ]
    const grp1 = [100,200,300,400,500] 
    const gri1 = 1
//2
    const grq2 = ['Кем был Фродо Бэггинс?',
      'Какой волшебник помогал Фродо на протяжении его пути?',
      'Как назывался отряд, собранный для уничтожения кольца?',
      'Кто был наследником престола в Минас Тирите?',
      'Кто помог хоббитам спастись после уничтожения кольца?'
    ]
    const gra2 = ['хоббитом,*удаком,гномом,эльфом',
      'Гендальф,Саруман,Радагаст,Мерлин',
      'братство кольца,братство ювелиров,мужской клуб,отряд самоубийц',
      'Арагорн,Араторн,Боромир,Богдан Титомир',
      'Орлы,Бог,Гендальф,Голлум'
    ]
    const grp2 = [100, 200, 300, 400, 500]
    const gri2 = 2
    //3
    const grq3 = ['Джокер',
      'Агент 007',
      'Уолтер Уайт',
      'Харли Квин',
      'Джордан Белфорт'
    ]
    const gra3 = ['Хоакин Феникс,Брэд Питт,Шарон Стоун,Виталий Милонов',
      'Дэниэл Крейг,Райан Рейнольдс,Дмитрий Харатьян,Александр Невский-Курицын',
      'Брайан Крэнстон,Данила Козловский,Вин Дизель,Дин Визель',
      'Марго Робби,Одри Хэпберн,Саша Грей,Анна де-Армас',
      'Леонардо Ди-Каприо,Дмитрий Нагиев,Том Холланд,Шон Бин'
    ]
    const grp3 = [100, 200, 300, 400, 500]
    const gri3 = 3
    // questions: { type: DataTypes.STRING, allowNull: false },
    // answers: { type: DataTypes.STRING, allowNull: false },
    // price: { type: DataTypes.INTEGER, allowNull: false },
    // topicId

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
