import { db } from '../db/database.js';

export async function getLikeUser(feedId){
    return db
    .execute('SELECT likeUser from liked WHERE feedId=?',[feedId])
    .then(result=>result[0]);
}

export async function getNumberOfLikes(feedId){
    return db
    .execute('SELECT count(likeUser) as NumberOfLikes FROM liked WHERE feedId=?', [feedId])
    .then(result=>result[0]);
}

export async function likeFeed(feedId, userId){
    db
    .execute('INSERT INTO liked(feedId, userId) VALUES(?, ?)', [feedId, userId])
    .then(result);
}

export async function unlikeFeed(feedId, userId){
    db
    .execute('DELETE FROM liked WHERE feedId=? userId=?', [feedId, userId])
    .then(result);
}