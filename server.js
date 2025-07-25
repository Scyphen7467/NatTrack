import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mealRoutes from './routes/meal.js';
import journalRoutes from './routes/journal.js';
import workoutRoutes from './routes/workout.js';
import weightRoutes from './routes/weight.js';

dotenv.config(); // Load env vars

const app = express(); // <-- move this up

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 Backend is live!');
});

app.use('/api/meal', mealRoutes);
app.use('/api/journal', journalRoutes);
app.use('/api/workout', workoutRoutes);
app.use('/api/weight', weightRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
