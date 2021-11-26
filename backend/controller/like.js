import * as likeRepository from '../data/like.js';

// GET /like/user/:feedId
export async function getLikeUser(req, res){
    const feedId = req.params.feedId;
    const likeUser = likeRepository.getLikeUser(feedId);
    res.status(200).json(likeUser);
}

// GET /like/numberOfLikes/:feedId
export async function getNumberOfLikes(req, res){
    const feedId = req.params.feedId;
    const NumberOfLikes = likeRepository.getNumberOfLikes(feedId);
    res.status(200).json(NumberOfLikes);
}

// POST /like/:feedId
export async function likeFeed(req, res){
    const feedId = req.params.feedId;
    likeRepository.likeFeed(feedId, req.userId);
    res.sendStatus(201);
}

// DELETE /like/:feedId
export async function unlikeFeed(req, res){
    const feedId = req.params.feedId;
    likeRepository.unlikeFeed(feedId, req.userId);
    res.sendStatus(204);
}