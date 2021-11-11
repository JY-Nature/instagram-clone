import * as feedRepository from '../data/feed.js';

export async function getFeeds(req, res){
  const feeds = await feedRepository.getAll();
  res.status(200).json(feeds);
}

export async function createFeed(req, res){
  const { userId, image_url, description } = req.body;
  const feed = await feedRepository.create( userId, image_url, description);
  res.status(201).json(feed);
}
