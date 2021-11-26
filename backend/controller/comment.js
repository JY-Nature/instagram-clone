import * as commentRepository from '../data/comment.js';

// GET /comment/:feedId
export async function getComment(req, res){
    const feedId = req.params.feedId;
    const comment = commentRepository.getComment(feedId);
    res.status(200).json(comment);
}

// POST /commnet/:feedId
export async function createComment(req, res){
    const feedId = req.params.feedId;
    const { content } = req.body;
    commentRepository.createComment(feedId, req.userId, content);
    res.sendStatus(201);
}

// DELETE /comment/:commentId
export async function removeComment(req, res){
    const commentId = req.params.commentId;
    commentRepository.removeComment(commentId);
    res.sendStatus(204);
}