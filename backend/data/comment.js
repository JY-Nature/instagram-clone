import { db } from '../db/database.js';

export async function getComment(feedId){
    db
    .execute('SELECT content FROM comment WHERE feedId=?', [feedId])
    .then(result=>result[0]);
}

export async function createComment(feedId, userId){
    db
    .execute('INSERT INTO comment(feedId, userId, content) VALUES(?,?,?)',
            [feedId, userId, content])
    .then(result);
}

export async function  removeComment(commentId){
    db
    .execute('DELETE FROM comment WHERE id=?', [commentId])
    .then(result);
}