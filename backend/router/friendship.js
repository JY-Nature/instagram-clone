import express from 'express';
import 'express-async-errors';
import * as friendshipController from '../controller/friendship.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

// GET /friendship/followers?=userId
router.get('/followers', friendshipController.getFollowers);

// GET /friendship/followings?=userId
router.get('/followings', friendshipController.getFollowings);

// POST /friendship/follow/:userId
router.post('/follow/:userId', friendshipController.follow);

// DELETE /friendship/unfollow/:userId
router.delete('/unfollow/:userId', friendshipController.unfollow);