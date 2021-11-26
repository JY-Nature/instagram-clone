import * as friendshipRepository from '../data/friendship.js';

// GET /friendship/followers?=userId
export async function getFollowers(req, res){
    const userId = req.query.userId;
    const follower = await friendshipRepository.getFollowers(userId);
    res.status(200).json(follower);
}

// GET /friendship/followings?=userId
export async function getFollowings(req, res){
    const userId = req.query.userId;
    const following = await friendshipRepository.getFollowings(userId);
    res.status(200).json(following);
}

// POST /friendship/follow/:userId
export async function follow(req, res){
    const userId = req.params.userId;
    await friendshipRepository.follow(userId);
    res.sendStatus(201);
}

// DELETE /friendship/unfollow/:userId
export async function unfollow(req, res){
    const userId = req.params.userId;
    await friendshipRepository.unfollow(req.userId, userId);
    res.sendStatus(204);
}