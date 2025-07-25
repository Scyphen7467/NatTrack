import express from 'express';
import { pool } from '../db.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, date, mood, text } = req.body;
  await pool.query(
    'INSERT INTO journal (user_id, date, mood, text) VALUES ($1, $2, $3, $4)',
    [userId, date, mood, text]
  );
  res.status(201).json({ message: 'Journal saved.' });
});

router.get('/', async (req, res) => {
  const { userId, date } = req.query;
  const result = await pool.query(
    'SELECT * FROM journal WHERE user_id = $1 AND date = $2',
    [userId, date]
  );
  res.json(result.rows);
});

export default router;