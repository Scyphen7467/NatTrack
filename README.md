# Fitness Tracker Backend

## Deployment

1. Copy `.env.example` to `.env` and fill in your Supabase DATABASE_URL.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start server:
   ```bash
   node server.js
   ```

## API Routes

- POST /api/meal
- GET /api/meal?userId=xxx&date=YYYY-MM-DD
- Same for /journal, /workout, /weight