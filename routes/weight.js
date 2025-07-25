import express from 'express';
import { pool } from '../db.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, date, weight } = req.body;
  await pool.query(
    'INSERT INTO weight (user_id, date, weight) VALUES ($1, $2, $3)',
    [userId, date, weight]
  );
  res.status(201).json({ message: 'Weight logged.' });
});

router.get('/', async (req, res) => {
  const { userId, date } = req.query;
  const result = await pool.query(
    'SELECT * FROM weight WHERE user_id = $1 AND date = $2',
    [userId, date]
  );
  res.json(result.rows);
});

export default router;