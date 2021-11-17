import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import * as authController from '../controller/auth.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

const validateCredential = [
    body('email')
        .notEmpty()
        .isEmail()
        .normalizeEmail()
        .withMessage('invalid email'),
    body('password')
        .trim()
        .isLength({ min: 5 })
        .withMessage('password should be at least 5 characters'),
    validate,
];

const validateSignup = [
    ...validateCredential,
    body('username').notEmpty().withMessage('username is missing'),
    body('name').notEmpty().withMessage('name is missing'),
    validate,
];

// POST/auth/signup
router.post('/signup', validateSignup, authController.signup);

// POST/auth/login
router.post('/login', validateCredential, authController.login);

// GET/auth/me
router.get('/me', isAuth, authController.me);

// POST/auth/newpassword
router.post('/newpassword', isAuth, authController.newpassword);

// PUT/auth/setprofile
router.put('/setprofile', isAuth, authController.setprofile);

export default router;