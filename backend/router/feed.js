import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as feedController from '../controller/feed.js';
import { isAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateFeed = [
    body('image_url')
        .notEmpty()
        .withMessage('imageURL should not empty'),
    validate,
]

// GET /feed
// GET /feed?userId:=userId
router.get('/', isAuth, feedController.getFeed);

// GET /feed/:feedId
router.get('/:feedId', isAuth, feedController.getFeedById);

// POST /feed
router.post('/', isAuth, validateFeed, feedController.createFeed);

// PUT /feed/:feedId
router.put('/:feedId', isAuth, validateFeed, feedController.updateFeed);

// DELETE /feed/:feedId
router.delete('/:feedId', isAuth, feedController.removeFeed);

export default router;