import { db } from '../db/database.js';

export async function getAll() {
  return db.execute('SELECT fd.id, fd.userId, fd.image_url, fd.description, fd.createdAt, us.email, us.username, us.name FROM feed as fd JOIN user as us ON fd.userId=us.id ORDER BY fd.createdAt')
  .then((result) => result[0]);
}

export async function create(userId, image_url, description) {
  return db
    .execute('INSERT INTO tweets (userId, image_url, description, createdAt) VALUES(?, ?, ?)', [
      userId,
      image_url,
      userId,
    ])
    .then((result) => getById(result[0].insertId));
}