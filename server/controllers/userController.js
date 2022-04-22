/* eslint-disable */
// подключаем сервис для работы с users
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/ApiError');
const {User} = require('../db/models/models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// подключаем результат работы валидатора

const generateToken = (id, name, email, sessionScore, totalScore, games, rightAnswers, wrongAnswers, isActivated) => {
    return jwt.sign({id, name, email, sessionScore, totalScore, games, rightAnswers, wrongAnswers, isActivated}, process.env.JWT_ACCESS_SECRET, { expiresIn: '30d' })
}

class UserController {
    // eslint-disable-next-line consistent-return
    async registration(req, res, next) {
        try {
            // errors will contain array with errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest('Недопустимый логин или пароль', errors.array()));
            }
            const { name, email, password} = req.body;

            const candidate = await User.findOne({where: {email}})

            if (candidate) {
                return next(ApiError.badRequest('Пользователь существует'))
            }

            const hashPassword = await bcrypt.hash(password, 3)

            const user = await User.create({name, email, password: hashPassword})

            const token = generateToken(user.id, user.name, user.email)


            return res.json({token})
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({where: {email}})

            if (!user) {
                next(ApiError.badRequest('Пользователя не существует'))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                next(ApiError.internal('Неверное имя пользователя или пароль'))
            }
            // перезаписываем токен, генерируем, кладем в куку, отправляем на клиент
            const token = generateToken(user.id, user.name, user.email, user.sessionScore, user.totalScore, user.games, user.rightAnswers, user.wrongAnswers, user.isActivated )
            res.json({token});
        } catch (e) {
            next(e);
        }
    }

    async checkAuth(req, res, next) {
        try {
            const token = generateToken(req.user.id, req.user.name, req.user.email)
            return res.json({token})
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {

        }
    }




}

module.exports = new UserController();
