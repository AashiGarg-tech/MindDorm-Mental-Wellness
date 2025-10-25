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


// // 2. MUST use ES Module export syntax
// export default router;

import express from 'express';
// import authenticateToken from '../middleware/authenticateToken.js'; // Temporarily commented out
import MoodEntry from '../models/MoodEntry.js';

const router = express.Router();

// POST /api/moods/track
// Route to save a new mood entry. AUTHENTICATION TEMPORARILY REMOVED FOR TESTING.
router.post('/track', async (req, res) => {
    
    // --- FIX 1: Destructure userId directly from the request body ---
    const { mood, note, userId } = req.body; 
    // const userId = req.user.id; // Old way (from middleware)

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required in the request body for testing without authentication.' });
    }

    try {
        // ----------------------------------------------------
        // START: 24-HOUR RESTRICTION LOGIC ADDED
        // ----------------------------------------------------
        
        // Calculate the timestamp for 24 hours ago
        const twentyFourHoursAgo = new Date(Date.now() - (24 * 60 * 60 * 1000));

        // Check the database for any mood entry by this user created after the '24 hours ago' time
        const recentMood = await MoodEntry.findOne({
            userId: userId,
            date: { $gte: twentyFourHoursAgo }
        });

        if (recentMood) {
            // Found a recent mood entry: Block the request and send a specific error status (403 Forbidden)
            
            // Calculate remaining time for a better user message
            const timeDifference = Date.now() - recentMood.date.getTime();
            const timeRemainingMs = (24 * 60 * 60 * 1000) - timeDifference;
            
            // Ensure remaining time is not negative (though it shouldn't be here)
            if (timeRemainingMs <= 0) {
                 // If the calculation somehow shows 0 or less, treat it as open
            } else {
                const hours = Math.floor(timeRemainingMs / (60 * 60 * 1000));
                const minutes = Math.floor((timeRemainingMs % (60 * 60 * 1000)) / (60 * 1000));
                
                return res.status(403).json({ 
                    success: false, 
                    message: `You can only track your mood once every 24 hours. Please wait ${hours} hours and ${minutes} minutes.`,
                    restriction: true // Custom flag for the frontend
                });
            }
        }
        
        // ----------------------------------------------------
        // END: 24-HOUR RESTRICTION LOGIC
        // ----------------------------------------------------

        // 1. Create and save the new entry to MongoDB (Only runs if no recent mood was found)
        const newEntry = await MoodEntry.create({
            userId: userId,
            mood: mood,
            note: note,
        });

        // 2. Success Response
        res.status(201).json({ 
            message: 'Mood entry saved successfully.', 
            entry: newEntry 
        });
    } catch (error) {
        console.error('Error saving mood entry:', error);
        
        // Handle Mongoose validation errors (e.g., mood is not a valid enum value)
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Invalid data submitted. Check mood selection or note length.' });
        }
        
        // General server error
        res.status(500).json({ message: 'Internal server error while saving mood.' });
    }
});

// GET /api/moods/history
// Route to fetch the user's mood history. AUTHENTICATION TEMPORARILY REMOVED FOR TESTING.
router.get('/history', async (req, res) => {
    // const userId = req.user.id; // Removed authentication check
    // --- FIX 2: Retrieve userId from query parameters for testing ---
    const { userId } = req.query;
    
    if (!userId) {
        return res.status(400).json({ message: 'User ID required in query parameters (?userId=...) for history retrieval.' });
    }
    
    try {
        // Fetch and sort entries by newest first
        const history = await MoodEntry.find({ userId }).sort({ date: -1 });
        res.status(200).json(history);
    } catch (error) {
        console.error('Error fetching mood history:', error);
        res.status(500).json({ message: 'Error fetching mood history.' });
    }
});


// 2. MUST use ES Module export syntax
export default router;