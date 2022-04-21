const router = require('express').Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');
// const AuthMiddleware = require('../middleware/AuthMiddleware')

// Роут для регистрации
router.post(
    '/registration',

    // валидация почты
    body('email').isEmail(),

    // валидация пароля
    body('password').isLength({ min: 3, max: 20 }),
    userController.registration,
);

// Роут для логина
router.post('/login', userController.login);

// Роут для лога аута
router.post('/logout', userController.logout);

// Роут для проверки получения пользователя если пользователь авторизован
// router.get('/auth', AuthMiddleware, userController.checkAuth);

module.exports = router;
