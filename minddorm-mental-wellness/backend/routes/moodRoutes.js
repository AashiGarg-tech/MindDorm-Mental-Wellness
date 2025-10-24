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
    // 1. Create and save the new entry to MongoDB
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

// import express from 'express';
// import authenticateToken from '../middleware/authenticateToken.js'; 
// import MoodEntry from '../models/MoodEntry.js';

// const router = express.Router();

// // Helper function to get the start and end of the current day (midnight to midnight)
// const getDailyTimeRange = () => {
//   const start = new Date();
//   start.setHours(0, 0, 0, 0); 

//   const end = new Date();
//   end.setHours(23, 59, 59, 999); 
  
//   return { start, end };
// };


// // POST /api/moods/track - SECURITY RESTORED
// // This route now requires a valid JWT.
// router.post('/track', authenticateToken, async (req, res) => {
//   // userId is now securely retrieved from the JWT payload
//   const userId = req.user.id; 
//   const { mood, note } = req.body; 

//   try {
//     // Daily Restriction Check
//     const { start, end } = getDailyTimeRange();

//     const existingEntry = await MoodEntry.findOne({
//       userId: userId,
//       date: { $gte: start, $lte: end }
//     });

//     if (existingEntry) {
//       return res.status(403).json({ 
//         message: 'Daily entry limit reached. You can only record one mood per day.' 
//       });
//     }

//     // Create and save the new entry
//     const newEntry = await MoodEntry.create({
//       userId: userId,
//       mood: mood,
//       note: note,
//     });

//     // Success Response
//     res.status(201).json({ 
//       message: `Mood entry '${newEntry.mood}' saved successfully.`, 
//       entry: newEntry 
//     });
//   } catch (error) {
//     console.error('Error saving mood entry:', error);
    
//     if (error.name === 'ValidationError') {
//       return res.status(400).json({ message: 'Invalid data submitted. Check mood selection or note length.' });
//     }
    
//     res.status(500).json({ message: 'Internal server error while saving mood.' });
//   }
// });

// // GET /api/moods/history - SECURITY RESTORED
// // This route now requires a valid JWT.
// router.get('/history', authenticateToken, async (req, res) => {
//     // userId is now securely retrieved from the JWT payload
//     const userId = req.user.id;
    
//     try {
//         const history = await MoodEntry.find({ userId }).sort({ date: -1 });
//         res.status(200).json(history);
//     } catch (error) {
//         console.error('Error fetching mood history:', error);
//         res.status(500).json({ message: 'Error fetching mood history.' });
//     }
// });


// export default router;
