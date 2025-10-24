import express from 'express';
// 1. MUST use ES Module import syntax for files that use 'export default'
import authenticateToken from '../middleware/authenticateToken.js'; 
import MoodEntry from '../models/MoodEntry.js';

const router = express.Router();

// POST /api/moods/track
// Route to save a new mood entry. Requires authentication.
router.post('/track', authenticateToken, async (req, res) => {
  const { mood, note } = req.body;
  // userId comes from the JWT payload attached by the middleware
  const userId = req.user.id; 

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
// Route to fetch the user's mood history. Requires authentication.
router.get('/history', authenticateToken, async (req, res) => {
    const userId = req.user.id;
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
