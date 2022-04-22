require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const serverConfig = (app) => {

    // Подключаем статику
    app.use(express.static('public'));

    // Подключаем cors для получения запросов с клиента,
    // будет необходим в дальнейшем при создании фронта на реакт
    app.use(cors({origin:['http://localhost:3000']}));

    // Подключаем json для работы с json форматом
    app.use(express.json());

    // Подключаем cookie-parser
    app.use(cookieParser());

    // Подключаем urlencoded
    app.use(express.urlencoded({ extended: true }));

    // Подключаем file upload
    app.use(fileUpload({}));
};

module.exports = serverConfig;
