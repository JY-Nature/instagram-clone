import express from 'express';
import 'express-async-errors';
import * as likeController from '../controller/like.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

// GET /like/user/:feedId
router.get('/user/:feedId', likeController.getLikeUser);

// GET /like/numberOfLikes/:feedId
router.get('/numberOfLikes/:feedId', likeController.getNumberOfLikes);

// POST /like/:feedId
router.post('/:feedId', isAuth, likeController.likeFeed);

// DELETE /like/:feedId
router.delete('/:feedId', isAuth, likeController.unlikeFeed);

export default router;