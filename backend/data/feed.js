import { db } from '../db/database.js';

// GET /feed
// GET /feed?userId:=userId
export async function getAll(userId){
    return db.execute('SELECT fd.id, fd.userId, fd.image_url, fd.description, fd.createdAt FROM feed AS fd JOIN friendship AS fs ON fs.from_user_id = ? AND fd.userId = fs.to_user_id ', [userId])
    .then(result => result[0]);
}

export async function getAllByUserId(userId){
    return db.execute('SELECT * FROM feed WHERE userId = ?', [userId])
    .then(result => result[0]);
}

// GET /feed/:feedId
export async function getById(feedId){
    return db.execute('SELECT * FROM feed WHERE id = ?', [feedId])
    .then(result => result[0]);
}

// POST /feed
export async function create(userId, image_url, description){
    return db
        .execute('INSERT INTO feed (userId, image_url, description, createdAt) VALUES(?,?,?,?)', [
            userId,
            image_url,
            description,
            new Date()
        ])
        .then(result => result[0]);
}

// PUT /feed/:feedId
export async function update(feedId, image_url, description){
    return db.execute('UPDATE FROM feed SET image_url = ?, description = ? WHERE id = ?', [image_url, description, feedId])
    .then(result => result[0]);
}

// DELETE /feed/:feedId
export async function remove(feedId){
    return db.execute('DELETE feed WHERE id = ?', [feedId]);
}