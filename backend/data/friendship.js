import { db } from '../db/database.js';

export async function getFollowers(userId){
    return db
    .execute('SELECT from_user_id FROM friendship WHERE to_user_id=?',
            [ userId ])
    .then(result => result[0]);
}

export async function getFollowings(userId){
    return db
    .execute('SELECT to_user_id FROM friendship WHERE from_user_id=?',
            [ userId ])
    .then(result => result[0]);
}

export async function follow(id, userId){
    return db
    .execute('INSERT INTO friendship(from_user_id, to_user_id) VALUES(?,?)',
            [ id, userId ])
    .then(result);
}

export async function unfollow(id, userId){
    return db
    .execute('DELETE FROM friendship WHERE from_user_id=? AND to_user_id=?',
            [ id, userId ])
    .then(result);
}