const express = require('express');
const { body, validationResult } = require('express-validator');
const userController = require('../Controllers/user.controller');
const authMiddleware = require('../Middlewares/auth.middleware');
const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.loginUser
)

router.get('/logout', authMiddleware.authUser, userController.logoutUser);

module.exports = router;