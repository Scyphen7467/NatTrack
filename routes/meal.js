import express from 'express';
import { pool } from '../db.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, date, items, carbs, protein } = req.body;
  await pool.query(
    'INSERT INTO meals (user_id, date, items, carbs, protein) VALUES ($1, $2, $3, $4, $5)',
    [userId, date, items, carbs, protein]
  );
  res.status(201).json({ message: 'Meal logged.' });
});

router.get('/', async (req, res) => {
  const { userId, date } = req.query;
  const result = await pool.query(
    'SELECT * FROM meals WHERE user_id = $1 AND date = $2',
    [userId, date]
  );
  res.json(result.rows);
});

export default router;