
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
    }
    for (let i = 0; i < 3; i++) {
      await Topic.create({
        topicName: topicName2[i],
        groupId: groupId2,
      });
    }
    for (let i = 0; i < 3; i++) {
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
    //4
    const grq4 = ['Как называлась государственная политика, объявленная в Советском Союзе в 1985 году?',
      'Кто из российских правителей сказал: "Ох, тяжела ты, шапка Мономаха!"',
      'В каком древнем городе при раскопках найдено большое количество берестяных грамот?',
      'В каком году умер Иосиф Сталин?',
      'Кто летал на космическом корабле «Восток-1»?'
    ]
    const gra4 = ['перестройка,дефолт,первая пятилетка,многоХодовОчка',
      'Борис Годунов,Борис Джонсон,Борис Ельцин,Иван Грозный',
      'Новгород,Москва,Петербург,Челябинск',
      '1953,1945,до сих пор живет в наших сердцах,1950',
      'Гагарин,Комаров,Терешкова,другой депутат'
    ]
    const grp4 = [100, 200, 300, 400, 500]
    const gri4 = 4

    //5
    const grq5 = ['Джокер',
      'Агент 007',
      'Уолтер Уайт',
      'Харли Квин',
      'Джордан Белфорт'
    ]
    const gra5 = ['Хоакин Феникс,Брэд Питт,Шарон Стоун,Виталий Милонов',
      'Дэниэл Крейг,Райан Рейнольдс,Дмитрий Харатьян,Александр Невский-Курицын',
      'Брайан Крэнстон,Данила Козловский,Вин Дизель,Дин Визель',
      'Марго Робби,Одри Хэпберн,Саша Грей,Анна де-Армас',
      'Леонардо Ди-Каприо,Дмитрий Нагиев,Том Холланд,Шон Бин'
    ]
    const grp5 = [100, 200, 300, 400, 500]
    const gri5 = 5
    //6
    const grq6 = ['Джокер',
      'Агент 007',
      'Уолтер Уайт',
      'Харли Квин',
      'Джордан Белфорт'
    ]
    const gra6 = ['Хоакин Феникс,Брэд Питт,Шарон Стоун,Виталий Милонов',
      'Дэниэл Крейг,Райан Рейнольдс,Дмитрий Харатьян,Александр Невский-Курицын',
      'Брайан Крэнстон,Данила Козловский,Вин Дизель,Дин Визель',
      'Марго Робби,Одри Хэпберн,Саша Грей,Анна де-Армас',
      'Леонардо Ди-Каприо,Дмитрий Нагиев,Том Холланд,Шон Бин'
    ]
    const grp6 = [100, 200, 300, 400, 500]
    const gri6 = 6
    //7
    const grq7 = ['Джокер',
      'Агент 007',
      'Уолтер Уайт',
      'Харли Квин',
      'Джордан Белфорт'
    ]
    const gra7 = ['Хоакин Феникс,Брэд Питт,Шарон Стоун,Виталий Милонов',
      'Дэниэл Крейг,Райан Рейнольдс,Дмитрий Харатьян,Александр Невский-Курицын',
      'Брайан Крэнстон,Данила Козловский,Вин Дизель,Дин Визель',
      'Марго Робби,Одри Хэпберн,Саша Грей,Анна де-Армас',
      'Леонардо Ди-Каприо,Дмитрий Нагиев,Том Холланд,Шон Бин'
    ]
    const grp7 = [100, 200, 300, 400, 500]
    const gri7 = 7
    //8
    const grq8 = ['Джокер',
      'Агент 007',
      'Уолтер Уайт',
      'Харли Квин',
      'Джордан Белфорт'
    ]
    const gra8 = ['Хоакин Феникс,Брэд Питт,Шарон Стоун,Виталий Милонов',
      'Дэниэл Крейг,Райан Рейнольдс,Дмитрий Харатьян,Александр Невский-Курицын',
      'Брайан Крэнстон,Данила Козловский,Вин Дизель,Дин Визель',
      'Марго Робби,Одри Хэпберн,Саша Грей,Анна де-Армас',
      'Леонардо Ди-Каприо,Дмитрий Нагиев,Том Холланд,Шон Бин'
    ]
    const grp8 = [100, 200, 300, 400, 500]
    const gri8 = 8
    //9
    const grq9 = ['Джокер',
      'Агент 007',
      'Уолтер Уайт',
      'Харли Квин',
      'Джордан Белфорт'
    ]
    const gra9 = ['Хоакин Феникс,Брэд Питт,Шарон Стоун,Виталий Милонов',
      'Дэниэл Крейг,Райан Рейнольдс,Дмитрий Харатьян,Александр Невский-Курицын',
      'Брайан Крэнстон,Данила Козловский,Вин Дизель,Дин Визель',
      'Марго Робби,Одри Хэпберн,Саша Грей,Анна де-Армас',
      'Леонардо Ди-Каприо,Дмитрий Нагиев,Том Холланд,Шон Бин'
    ]
    const grp9 = [100, 200, 300, 400, 500]
    const gri9 = 9

    for (let i = 0; i < 5; i++) {
      await Questions.create({
        questions: grq1[i],
        answers: gra1[i],
        price: grp1[i],
        topicId: gri1,
      });
    }
    for (let i = 0; i < 5; i++) {
      await Questions.create({
        questions: grq2[i],
        answers: gra2[i],
        price: grp2[i],
        topicId: gri2,
      });
    }
    for (let i = 0; i < 5; i++) {
      await Questions.create({
        questions: grq3[i],
        answers: gra3[i],
        price: grp3[i],
        topicId: gri3,
      });
    }
    for (let i = 0; i < 5; i++) {
      await Questions.create({
        questions: grq4[i],
        answers: gra4[i],
        price: grp4[i],
        topicId: gri4,
      });
    }
    for (let i = 0; i < 5; i++) {
      await Questions.create({
        questions: grq5[i],
        answers: gra5[i],
        price: grp5[i],
        topicId: gri5,
      });
    }
    for (let i = 0; i < 5; i++) {
      await Questions.create({
        questions: grq6[i],
        answers: gra6[i],
        price: grp6[i],
        topicId: gri6,
      });
    }
    for (let i = 0; i < 5; i++) {
      await Questions.create({
        questions: grq1[i],
        answers: gra7[i],
        price: grp7[i],
        topicId: gri7,
      });
    }
    for (let i = 0; i < 5; i++) {
      await Questions.create({
        questions: grq8[i],
        answers: gra8[i],
        price: grp8[i],
        topicId: gri8,
      });
    }
    for (let i = 0; i < 5; i++) {
      await Questions.create({
        questions: grq9[i],
        answers: gra9[i],
        price: grp9[i],
        topicId: gri9,
      });
    }
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
