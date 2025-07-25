import express from 'express';
import { pool } from '../db.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, date, type, entries } = req.body;
  await pool.query(
    'INSERT INTO workout (user_id, date, type, entries) VALUES ($1, $2, $3, $4)',
    [userId, date, type, JSON.stringify(entries)]
  );
  res.status(201).json({ message: 'Workout saved.' });
});

router.get('/', async (req, res) => {
  const { userId, date } = req.query;
  const result = await pool.query(
    'SELECT * FROM workout WHERE user_id = $1 AND date = $2',
    [userId, date]
  );
  res.json(result.rows);
});

export default router;