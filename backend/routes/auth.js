import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import * as authController from '../controllers/auth.js';
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

router.post('/signup', validateSignup, authController.signup);
router.post('/login', validateCredential, authController.login);
router.get('/me', isAuth, authController.me);

export default router;
