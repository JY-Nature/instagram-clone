import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as commentController from '../controller/comment.js';
import { isAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateComment = [
    body('content').isLength({max:30}).withMessage('You have to write comments in less than 30 characters'), 
    validate,
];

// GET /comment/:feedId
router.get('/:feedId', commentController.getComment);

// POST /commnet/:feedId
router.post('/:feedId', isAuth, validateComment, commentController.createComment);

// DELETE /comment/:feedId
router.delete('/:feedId', commentController.removeComment);

export default router;