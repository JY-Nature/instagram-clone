import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as feedController from '../controllers/feed.js';
import { isAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateFeed = [
  body('image_url')
    .notEmpty()
    .withMessage('imageURL should not empty'),
  validate,
];

// GET /feeds
router.get('/', isAuth, feedController.getFeeds);

// POST /feeds
router.post('/', isAuth, validateFeed, feedController.createFeed);

// DELETE /feeds/:username

export default router;
