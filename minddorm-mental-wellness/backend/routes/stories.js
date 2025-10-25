// const express = require('express');
// const router = express.Router();
// const Story = require('../models/Story');
// const User = require('../models/User');

// // Get all stories (excluding flagged)
// router.get('/', async (req, res) => {
//   const stories = await Story.find({ flags: { $lt: 5 } }).sort('-createdAt');
//   const enriched = await Promise.all(stories.map(async story => {
//     const user = await User.findOne({ userId: story.userId });
//     return {
//       ...story.toObject(),
//       username: user?.username,
//       avatarUrl: user?.avatarUrl
//     };
//   }));
//   res.json(enriched);
// });

// // Post a new story
// router.post('/', async (req, res) => {
//   const { userId, content } = req.body;
//   const story = new Story({ userId, content });
//   await story.save();
//   res.status(201).json(story);
// });

// // Like a story
// router.post('/:id/like', async (req, res) => {
//   const story = await Story.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
//   res.json(story);
// });

// // Comment on a story
// router.post('/:id/comment', async (req, res) => {
//   const { userId, content } = req.body;
//   const story = await Story.findByIdAndUpdate(
//     req.params.id,
//     { $push: { comments: { userId, content } } },
//     { new: true }
//   );
//   res.json(story);
// });

// // Flag a story
// router.post('/:id/flag', async (req, res) => {
//   const story = await Story.findByIdAndUpdate(req.params.id, { $inc: { flags: 1 } }, { new: true });
//   if (story.flags >= 5) {
//     await Story.findByIdAndDelete(req.params.id);
//     return res.json({ status: 'deleted due to flags' });
//   }
//   res.json({ status: 'flagged', story });
// });

// // Get latest contributors
// router.get('/contributors/latest', async (req, res) => {
//   const latestStories = await Story.find({ flags: { $lt: 5 } }).sort('-createdAt').limit(10);
//   const uniqueUserIds = [...new Set(latestStories.map(s => s.userId))];
//   const top3 = uniqueUserIds.slice(0, 3);
//   const moreCount = uniqueUserIds.length - top3.length;

//   const avatars = await Promise.all(top3.map(async userId => {
//     const user = await User.findOne({ userId });
//     return {
//       userId,
//       avatarUrl: user?.avatarUrl
//     };
//   }));

//   res.json({ avatars, moreCount });
// });

// import express from 'express';
// import Story from '../models/Story.js'; // Use import and .js extension
// import User from '../models/User.js'; // Use import and .js extension

// const router = express.Router();

// // Get all stories (excluding flagged)
// router.get('/', async (req, res) => {
//   try {
//     const stories = await Story.find({ flags: { $lt: 5 } }).sort('-createdAt');
//     // Enriched stories with username and avatar for frontend display
//     const enriched = await Promise.all(stories.map(async story => {
//       // Assuming User model has a field 'userId' that matches the story's userId
//       const user = await User.findOne({ userId: story.userId }); 
//       return {
//         ...story.toObject(),
//         username: user?.username,
//         avatarUrl: user?.avatarUrl
//       };
//     }));
//     res.json(enriched);
//   } catch (error) {
//     console.error('Error fetching stories:', error);
//     res.status(500).json({ message: 'Failed to fetch stories.' });
//   }
// });

// // Post a new story
// router.post('/', async (req, res) => {
//   const { userId, content } = req.body;
//   try {
//     const story = new Story({ userId, content });
//     await story.save();
//     res.status(201).json(story);
//   } catch (error) {
//     console.error('Error posting story:', error);
//     res.status(400).json({ message: 'Invalid story data.' });
//   }
// });

// // Like a story
// router.post('/:id/like', async (req, res) => {
//   try {
//     const story = await Story.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
//     res.json(story);
//   } catch (error) {
//     console.error('Error liking story:', error);
//     res.status(500).json({ message: 'Failed to like story.' });
//   }
// });

// // Comment on a story
// router.post('/:id/comment', async (req, res) => {
//   const { userId, content } = req.body;
//   try {
//     const story = await Story.findByIdAndUpdate(
//       req.params.id,
//       { $push: { comments: { userId, content, createdAt: new Date() } } }, // Add createdAt for comments
//       { new: true }
//     );
//     res.json(story);
//   } catch (error) {
//     console.error('Error commenting on story:', error);
//     res.status(500).json({ message: 'Failed to add comment.' });
//   }
// });

// // Flag a story
// router.post('/:id/flag', async (req, res) => {
//   try {
//     const story = await Story.findByIdAndUpdate(req.params.id, { $inc: { flags: 1 } }, { new: true });
//     if (story && story.flags >= 5) {
//       await Story.findByIdAndDelete(req.params.id);
//       return res.json({ status: 'deleted due to flags' });
//     }
//     res.json({ status: 'flagged', story });
//   } catch (error) {
//     console.error('Error flagging story:', error);
//     res.status(500).json({ message: 'Failed to flag story.' });
//   }
// });

// // Get latest contributors
// router.get('/contributors/latest', async (req, res) => {
//   try {
//     const latestStories = await Story.find({ flags: { $lt: 5 } }).sort('-createdAt').limit(10);
//     const uniqueUserIds = [...new Set(latestStories.map(s => s.userId))];
//     const top3 = uniqueUserIds.slice(0, 3);
//     const moreCount = uniqueUserIds.length - top3.length;

//     const avatars = await Promise.all(top3.map(async userId => {
//       const user = await User.findOne({ userId });
//       return {
//         userId,
//         avatarUrl: user?.avatarUrl
//       };
//     }));

//     res.json({ avatars, moreCount });
//   } catch (error) {
//     console.error('Error fetching contributors:', error);
//     res.status(500).json({ message: 'Failed to fetch contributors.' });
//   }
// });

// // export default router; // Change module.exports to export default
// import express from 'express';
// // Removed redundant import of User model since we are now using populate
// import Story from '../models/Story.js'; 
// // import User from '../models/User.js'; // REMOVED

// const router = express.Router();

// // GET all stories (excluding flagged) and use POPULATE for user details
// router.get('/', async (req, res) => {
//     try {
//         const stories = await Story.find({ flags: { $lt: 5 } })
//             .sort('-createdAt')
//             // FIX 3: Use populate to efficiently embed User data (username, avatarUrl)
//             .populate('userId', 'username avatarUrl') 
//             .populate('comments.userId', 'username avatarUrl') // Populate user data for comments
//             .exec(); // Execute the query

//         // The returned 'stories' array is already "enriched"
//         // We no longer need the slow Promise.all mapping loop.
//         res.json(stories);
//     } catch (error) {
//         console.error('Error fetching stories:', error);
//         res.status(500).json({ message: 'Failed to fetch stories.' });
//     }
// });

// // Post a new story (Keep as is, but ensure front end sends ObjectId)
// router.post('/', async (req, res) => {
//     const { userId, content } = req.body;
//     try {
//         const story = new Story({ userId, content });
//         await story.save();
        
//         // FIX 4: Populate user details before sending the response
//         const populatedStory = await Story.findById(story._id)
//             .populate('userId', 'username avatarUrl');
            
//         res.status(201).json(populatedStory);
//     } catch (error) {
//         console.error('Error posting story:', error);
//         res.status(400).json({ message: 'Invalid story data.' });
//     }
// });

// // Like a story (No changes needed)
// router.post('/:id/like', async (req, res) => {
//     try {
//         const story = await Story.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
//         res.json(story);
//     } catch (error) {
//         console.error('Error liking story:', error);
//         res.status(500).json({ message: 'Failed to like story.' });
//     }
// });

// // Comment on a story
// router.post('/:id/comment', async (req, res) => {
//     const { userId, content } = req.body;
//     const storyId = req.params.id; // Get the story ID from the URL parameter

//     try {
//         // 1. PERFORM THE UPDATE: Push the new comment object into the array
//         const updatedStory = await Story.findByIdAndUpdate(
//             storyId,
//             { $push: { comments: { userId, content, createdAt: new Date() } } },
//             { new: true } // Return the updated document
//         );

//         if (!updatedStory) {
//             return res.status(404).json({ message: 'Story not found.' });
//         }
        
//         // 2. FETCH AND POPULATE: Fetch the updated story again to correctly populate the user data
//         // This separate step fixes the issue where Mongoose fails to populate newly pushed subdocuments in a single update call.
//         const fullyPopulatedStory = await Story.findById(storyId)
//             .populate('userId', 'username avatarUrl')
//             .populate('comments.userId', 'username avatarUrl');
        
//         // Ensure the fully populated story is returned, giving the frontend everything it needs
//         res.status(200).json(fullyPopulatedStory); 

//     } catch (error) {
//         // Log the actual Mongoose error to the console for real debugging
//         console.error('Error commenting on story:', error); 
        
//         // Return a more informative error for the frontend if it's a validation issue
//         if (error.name === 'ValidationError') {
//             return res.status(400).json({ message: 'Invalid comment data.' });
//         }
        
//         // Generic 500 error
//         res.status(500).json({ message: 'Failed to add comment due to server error.' });
//     }
// });

// // Flag a story (No changes needed)
// router.post('/:id/flag', async (req, res) => {
//     try {
//         const story = await Story.findByIdAndUpdate(req.params.id, { $inc: { flags: 1 } }, { new: true });
//         if (story && story.flags >= 5) {
//             await Story.findByIdAndDelete(req.params.id);
//             return res.json({ status: 'deleted due to flags' });
//         }
//         res.json({ status: 'flagged', story });
//     } catch (error) {
//         console.error('Error flagging story:', error);
//         res.status(500).json({ message: 'Failed to flag story.' });
//     }
// });

// // Get latest contributors (Use distinct and populate)
// router.get('/contributors/latest', async (req, res) => {
//     try {
//         // Find distinct user IDs from the last 10 stories
//         const uniqueUserIds = await Story.distinct('userId', { flags: { $lt: 5 } })
//             .sort({ createdAt: -1 })
//             .limit(10);
            
//         const top3Ids = uniqueUserIds.slice(0, 3);
//         const moreCount = uniqueUserIds.length > 3 ? uniqueUserIds.length - 3 : 0;

//         // Fetch user details for the top 3 IDs in one query
//         const users = await User.find({ _id: { $in: top3Ids } }, 'avatarUrl');

//         const avatars = top3Ids.map(userId => {
//             const user = users.find(u => u._id.toString() === userId.toString());
//             return {
//                 userId: userId,
//                 avatarUrl: user?.avatarUrl
//             };
//         });

//         res.json({ avatars, moreCount });
//     } catch (error) {
//         console.error('Error fetching contributors:', error);
//         res.status(500).json({ message: 'Failed to fetch contributors.' });
//     }
// });

// export default router;

import express from 'express';
import Story from '../models/Story.js'; 
import User from '../models/User.js'; // Re-added the import for better model registration

const router = express.Router();
const FLAGS_TO_DELETE = 5; // Define the deletion threshold

// GET all stories (excluding flagged) and use POPULATE for user details
router.get('/', async (req, res) => {
    try {
        // Only fetch stories where flags are less than 5
        const stories = await Story.find({ flags: { $lt: FLAGS_TO_DELETE } })
            .sort('-createdAt')
            .populate('userId', 'username avatarUrl') 
            .populate('comments.userId', 'username avatarUrl') 
            .exec(); 

        res.json(stories);
    } catch (error) {
        console.error('Error fetching stories:', error);
        res.status(500).json({ message: 'Failed to fetch stories.' });
    }
});

// Post a new story (unchanged)
router.post('/', async (req, res) => {
    const { userId, content } = req.body;
    try {
        const story = new Story({ userId, content });
        await story.save();
        
        const populatedStory = await Story.findById(story._id)
            .populate('userId', 'username avatarUrl');
            
        res.status(201).json(populatedStory);
    } catch (error) {
        console.error('Error posting story:', error);
        res.status(400).json({ message: 'Invalid story data.' });
    }
});

// Like a story (unchanged)
router.post('/:id/like', async (req, res) => {
    try {
        const story = await Story.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
        res.json(story);
    } catch (error) {
        console.error('Error liking story:', error);
        res.status(500).json({ message: 'Failed to like story.' });
    }
});

// Comment on a story (unchanged)
router.post('/:id/comment', async (req, res) => {
    const { userId, content } = req.body;
    const storyId = req.params.id;

    try {
        const updatedStory = await Story.findByIdAndUpdate(
            storyId,
            { $push: { comments: { userId, content, createdAt: new Date() } } },
            { new: true } 
        );

        if (!updatedStory) {
            return res.status(404).json({ message: 'Story not found.' });
        }
        
        const fullyPopulatedStory = await Story.findById(storyId)
            .populate('userId', 'username avatarUrl')
            .populate('comments.userId', 'username avatarUrl');
        
        res.status(200).json(fullyPopulatedStory); 
    } catch (error) {
        console.error('Error commenting on story:', error); 
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Invalid comment data.' });
        }
        res.status(500).json({ message: 'Failed to add comment due to server error.' });
    }
});

// --- UPDATED: Flag a story with 5-flag deletion logic ---
router.post('/:id/flag', async (req, res) => {
    try {
        // 1. Increment the flag count and get the updated document
        const story = await Story.findByIdAndUpdate(
            req.params.id, 
            { $inc: { flags: 1 } }, 
            { new: true, fields: 'flags' } // Only retrieve the updated 'flags' count for efficiency
        );

        if (!story) {
            return res.status(404).json({ message: 'Story not found.' });
        }
        
        const currentFlags = story.flags;

        // 2. Check if the deletion threshold is reached
        if (currentFlags >= FLAGS_TO_DELETE) {
            // Delete the story from the database
            await Story.findByIdAndDelete(req.params.id);
            
            // Send a specific response status so the frontend can easily remove the post
            return res.status(200).json({ 
                status: 'deleted', 
                message: `Story deleted after reaching ${FLAGS_TO_DELETE} flags.` 
            });
        }
        
        // 3. If not deleted, confirm the flag was recorded
        res.status(200).json({ 
            status: 'flagged', 
            flags: currentFlags,
            message: `Story flagged. Current count: ${currentFlags}/${FLAGS_TO_DELETE}` 
        });

    } catch (error) {
        console.error('Error flagging story:', error);
        res.status(500).json({ message: 'Failed to flag story.' });
    }
});
// --- END UPDATED Flag logic ---

// Get latest contributors (unchanged)
router.get('/contributors/latest', async (req, res) => {
    try {
        const uniqueUserIds = await Story.distinct('userId', { flags: { $lt: FLAGS_TO_DELETE } })
            .sort({ createdAt: -1 })
            .limit(10);
            
        const top3Ids = uniqueUserIds.slice(0, 3);
        const moreCount = uniqueUserIds.length > 3 ? uniqueUserIds.length - 3 : 0;

        const users = await User.find({ _id: { $in: top3Ids } }, 'avatarUrl');

        const avatars = top3Ids.map(userId => {
            const user = users.find(u => u._id.toString() === userId.toString());
            return {
                userId: userId,
                avatarUrl: user?.avatarUrl
            };
        });

        res.json({ avatars, moreCount });
    } catch (error) {
        console.error('Error fetching contributors:', error);
        res.status(500).json({ message: 'Failed to fetch contributors.' });
    }
});

export default router;
