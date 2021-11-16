import * as feedRepository from '../data/feed.js';

// GET /feed
// GET /feed?userId:=userId
export async function getFeed(req, res){
    const userId = req.query.userId;
    const feed = await (userId
        ? feedRepository.getAllByUserId(userId)
        : feedRepository.getAll(req.userId)
        );
    res.status(200).json(feed);
}

// GET /feed/:feedId
export async function getFeedById(req, res){
    const feedId = req.params.feedId;
    const feed = getById(feedId);
    res.status(200).json(feed);
}

// POST /feed
export async function createFeed(req, res){
    const { userId, image_url, description } = req.body;
    const feed = await feedRepository.create( userId, image_url, description);
    res.status(201).json(feed);
}

// PUT /feed/:feedId
export async function updateFeed(req, res){
    const feedId = req.params.feedId;
    const { image_url, description } = req.body;
    const feed = update( feedId, image_url, description);
    res.status(201).json(feed);
}

// DELETE /feed/:feedId
export async function removeFeed(req, res){
    const feedId = req.params.feedId;
    remove(feedId);
    res.sendStatus(204);
}