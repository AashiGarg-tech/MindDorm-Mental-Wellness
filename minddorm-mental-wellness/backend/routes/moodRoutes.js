// import express from 'express';
// // import authenticateToken from '../middleware/authenticateToken.js'; // Temporarily commented out
// import MoodEntry from '../models/MoodEntry.js';

// const router = express.Router();

// // POST /api/moods/track
// // Route to save a new mood entry. AUTHENTICATION TEMPORARILY REMOVED FOR TESTING.
// router.post('/track', async (req, res) => {
//   // --- FIX 1: Destructure userId directly from the request body ---
//   const { mood, note, userId } = req.body; 
//   // const userId = req.user.id; // Old way (from middleware)

//   if (!userId) {
//     return res.status(400).json({ message: 'User ID is required in the request body for testing without authentication.' });
//   }

//   try {
//     // 1. Create and save the new entry to MongoDB
//     const newEntry = await MoodEntry.create({
//       userId: userId,
//       mood: mood,
//       note: note,
//     });

//     // 2. Success Response
//     res.status(201).json({ 
//       message: 'Mood entry saved successfully.', 
//       entry: newEntry 
//     });
//   } catch (error) {
//     console.error('Error saving mood entry:', error);
    
//     // Handle Mongoose validation errors (e.g., mood is not a valid enum value)
//     if (error.name === 'ValidationError') {
//       return res.status(400).json({ message: 'Invalid data submitted. Check mood selection or note length.' });
//     }
    
//     // General server error
//     res.status(500).json({ message: 'Internal server error while saving mood.' });
//   }
// });

// // GET /api/moods/history
// // Route to fetch the user's mood history. AUTHENTICATION TEMPORARILY REMOVED FOR TESTING.
// router.get('/history', async (req, res) => {
//     // const userId = req.user.id; // Removed authentication check
//     // --- FIX 2: Retrieve userId from query parameters for testing ---
//     const { userId } = req.query;
    
//     if (!userId) {
//         return res.status(400).json({ message: 'User ID required in query parameters (?userId=...) for history retrieval.' });
//     }
    
//     try {
//         // Fetch and sort entries by newest first
//         const history = await MoodEntry.find({ userId }).sort({ date: -1 });
//         res.status(200).json(history);
//     } catch (error) {
//         console.error('Error fetching mood history:', error);
//         res.status(500).json({ message: 'Error fetching mood history.' });
//     }
// });


// // // 2. MUST use ES Module export syntax
// // export default router;

// import express from 'express';
// // import authenticateToken from '../middleware/authenticateToken.js'; // Temporarily commented out
// import MoodEntry from '../models/MoodEntry.js';

// const router = express.Router();

// // POST /api/moods/track
// // Route to save a new mood entry. AUTHENTICATION TEMPORARILY REMOVED FOR TESTING.
// router.post('/track', async (req, res) => {
    
//     // --- FIX 1: Destructure userId directly from the request body ---
//     const { mood, note, userId } = req.body; 
//     // const userId = req.user.id; // Old way (from middleware)

//     if (!userId) {
//         return res.status(400).json({ message: 'User ID is required in the request body for testing without authentication.' });
//     }

//     try {
//         // ----------------------------------------------------
//         // START: 24-HOUR RESTRICTION LOGIC ADDED
//         // ----------------------------------------------------
        
//         // Calculate the timestamp for 24 hours ago
//         const twentyFourHoursAgo = new Date(Date.now() - (24 * 60 * 60 * 1000));

//         // Check the database for any mood entry by this user created after the '24 hours ago' time
//         const recentMood = await MoodEntry.findOne({
//             userId: userId,
//             date: { $gte: twentyFourHoursAgo }
//         });

//         if (recentMood) {
//             // Found a recent mood entry: Block the request and send a specific error status (403 Forbidden)
            
//             // Calculate remaining time for a better user message
//             const timeDifference = Date.now() - recentMood.date.getTime();
//             const timeRemainingMs = (24 * 60 * 60 * 1000) - timeDifference;
            
//             // Ensure remaining time is not negative (though it shouldn't be here)
//             if (timeRemainingMs <= 0) {
//                  // If the calculation somehow shows 0 or less, treat it as open
//             } else {
//                 const hours = Math.floor(timeRemainingMs / (60 * 60 * 1000));
//                 const minutes = Math.floor((timeRemainingMs % (60 * 60 * 1000)) / (60 * 1000));
                
//                 return res.status(403).json({ 
//                     success: false, 
//                     message: `You can only track your mood once every 24 hours. Please wait ${hours} hours and ${minutes} minutes.`,
//                     restriction: true // Custom flag for the frontend
//                 });
//             }
//         }
        
//         // ----------------------------------------------------
//         // END: 24-HOUR RESTRICTION LOGIC
//         // ----------------------------------------------------

//         // 1. Create and save the new entry to MongoDB (Only runs if no recent mood was found)
//         const newEntry = await MoodEntry.create({
//             userId: userId,
//             mood: mood,
//             note: note,
//         });

//         // 2. Success Response
//         res.status(201).json({ 
//             message: 'Mood entry saved successfully.', 
//             entry: newEntry 
//         });
//     } catch (error) {
//         console.error('Error saving mood entry:', error);
        
//         // Handle Mongoose validation errors (e.g., mood is not a valid enum value)
//         if (error.name === 'ValidationError') {
//             return res.status(400).json({ message: 'Invalid data submitted. Check mood selection or note length.' });
//         }
        
//         // General server error
//         res.status(500).json({ message: 'Internal server error while saving mood.' });
//     }
// });

// // GET /api/moods/history
// // Route to fetch the user's mood history. AUTHENTICATION TEMPORARILY REMOVED FOR TESTING.
// router.get('/history', async (req, res) => {
//     // const userId = req.user.id; // Removed authentication check
//     // --- FIX 2: Retrieve userId from query parameters for testing ---
//     const { userId } = req.query;
    
//     if (!userId) {
//         return res.status(400).json({ message: 'User ID required in query parameters (?userId=...) for history retrieval.' });
//     }
    
//     try {
//         // Fetch and sort entries by newest first
//         const history = await MoodEntry.find({ userId }).sort({ date: -1 });
//         res.status(200).json(history);
//     } catch (error) {
//         console.error('Error fetching mood history:', error);
//         res.status(500).json({ message: 'Error fetching mood history.' });
//     }
// });


// // 2. MUST use ES Module export syntax
// export default router;





// routes/moodRoutes.js
import express from 'express';
import authenticateToken from '../middleware/authenticateToken.js';

// Function receives PostgreSQL pool from server.js
const moodRoutes = (pool) => {
    const router = express.Router();

    // ------------------------------
    // GET /api/mood/stats
    // Get mood statistics (average, streak, total entries)
    // ------------------------------
    router.get('/stats', authenticateToken, async (req, res) => {
        const userId = req.userId;

        try {
            // Get average mood for last 30 days
            const avgQuery = `
                SELECT 
                    ROUND(AVG(mood_rating)::numeric, 1) as avg_mood,
                    COUNT(*) as total_entries
                FROM mood_entries
                WHERE user_id = $1 
                    AND check_in_date >= CURRENT_DATE - INTERVAL '30 days'
            `;

            // Calculate current streak
            const streakQuery = `
                WITH date_series AS (
                    SELECT generate_series(
                        CURRENT_DATE - INTERVAL '365 days',
                        CURRENT_DATE,
                        '1 day'::interval
                    )::date AS check_date
                ),
                mood_status AS (
                    SELECT 
                        ds.check_date,
                        CASE WHEN me.id IS NOT NULL THEN 1 ELSE 0 END as has_entry
                    FROM date_series ds
                    LEFT JOIN mood_entries me ON me.check_in_date = ds.check_date 
                        AND me.user_id = $1
                    ORDER BY ds.check_date DESC
                ),
                streak_calc AS (
                    SELECT 
                        check_date,
                        has_entry,
                        SUM(CASE WHEN has_entry = 0 THEN 1 ELSE 0 END) 
                            OVER (ORDER BY check_date DESC) as group_id
                    FROM mood_status
                )
                SELECT COUNT(*) as current_streak
                FROM streak_calc
                WHERE group_id = 0 AND has_entry = 1
            `;

            const [avgResult, streakResult] = await Promise.all([
                pool.query(avgQuery, [userId]),
                pool.query(streakQuery, [userId])
            ]);

            res.json({
                success: true,
                data: {
                    averageMood: avgResult.rows[0].avg_mood || 0,
                    totalEntries: parseInt(avgResult.rows[0].total_entries) || 0,
                    currentStreak: parseInt(streakResult.rows[0].current_streak) || 0
                }
            });

        } catch (error) {
            console.error('Error fetching mood stats:', error);
            res.status(500).json({ 
                success: false, 
                message: 'Failed to retrieve mood statistics.',
                error: error.message 
            });
        }
    });

    // ------------------------------
    // GET /api/mood/trend
    // Get mood trend data for chart (last N days)
    // ------------------------------
    router.get('/trend', authenticateToken, async (req, res) => {
        const userId = req.userId;
        const days = parseInt(req.query.days) || 30;

        const queryText = `
            SELECT 
                check_in_date,
                mood_rating,
                notes
            FROM mood_entries
            WHERE user_id = $1 
                AND check_in_date >= CURRENT_DATE - INTERVAL '${days} days'
            ORDER BY check_in_date ASC
        `;

        try {
            const result = await pool.query(queryText, [userId]);
            res.json({
                success: true,
                data: result.rows
            });
        } catch (error) {
            console.error('Error fetching mood trend:', error);
            res.status(500).json({ 
                success: false, 
                message: 'Failed to retrieve mood trend data.',
                error: error.message 
            });
        }
    });

    // ------------------------------
    // GET /api/mood/today
    // Get today's mood entry
    // ------------------------------
    router.get('/today', authenticateToken, async (req, res) => {
        const userId = req.userId;

        const queryText = `
            SELECT * FROM mood_entries
            WHERE user_id = $1 AND check_in_date = CURRENT_DATE
        `;

        try {
            const result = await pool.query(queryText, [userId]);
            res.json({
                success: true,
                data: result.rows[0] || null
            });
        } catch (error) {
            console.error('Error fetching today\'s mood:', error);
            res.status(500).json({ 
                success: false, 
                message: 'Failed to retrieve today\'s mood.',
                error: error.message 
            });
        }
    });

    // ------------------------------
    // POST /api/mood/entry
    // Create or update mood entry
    // ------------------------------
    router.post('/entry', authenticateToken, async (req, res) => {
        const userId = req.userId;
        const { mood_rating, check_in_date, notes } = req.body;

        // Validate mood rating
        if (!mood_rating || mood_rating < 1 || mood_rating > 5) {
            return res.status(400).json({ 
                success: false, 
                message: 'Mood rating must be between 1 and 5' 
            });
        }

        const date = check_in_date || new Date().toISOString().split('T')[0];

        // Try to insert, if conflict then update
        const queryText = `
            INSERT INTO mood_entries (user_id, mood_rating, check_in_date, notes)
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (user_id, check_in_date)
            DO UPDATE SET 
                mood_rating = EXCLUDED.mood_rating,
                notes = EXCLUDED.notes,
                created_at = NOW()
            RETURNING *
        `;

        try {
            const result = await pool.query(queryText, [userId, mood_rating, date, notes]);
            res.status(201).json({
                success: true,
                message: 'Mood entry saved successfully',
                data: result.rows[0]
            });
        } catch (error) {
            console.error('Error saving mood entry:', error);
            res.status(500).json({ 
                success: false, 
                message: 'Failed to save mood entry.',
                error: error.message 
            });
        }
    });

    // ------------------------------
    // DELETE /api/mood/entry/:date
    // Delete mood entry for a specific date
    // ------------------------------
    router.delete('/entry/:date', authenticateToken, async (req, res) => {
        const userId = req.userId;
        const { date } = req.params;

        const queryText = `
            DELETE FROM mood_entries
            WHERE user_id = $1 AND check_in_date = $2
            RETURNING *
        `;

        try {
            const result = await pool.query(queryText, [userId, date]);

            if (result.rows.length === 0) {
                return res.status(404).json({ 
                    success: false, 
                    message: 'Mood entry not found' 
                });
            }

            res.json({
                success: true,
                message: 'Mood entry deleted successfully'
            });
        } catch (error) {
            console.error('Error deleting mood entry:', error);
            res.status(500).json({ 
                success: false, 
                message: 'Failed to delete mood entry.',
                error: error.message 
            });
        }
    });

    return router;
};

export default moodRoutes;