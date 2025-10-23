const express = require('express');
const router = express.Router();
const Story = require('../models/Story');
const User = require('../models/User');

// Get all stories (excluding flagged)
router.get('/', async (req, res) => {
  const stories = await Story.find({ flags: { $lt: 5 } }).sort('-createdAt');
  const enriched = await Promise.all(stories.map(async story => {
    const user = await User.findOne({ userId: story.userId });
    return {
      ...story.toObject(),
      username: user?.username,
      avatarUrl: user?.avatarUrl
    };
  }));
  res.json(enriched);
});

// Post a new story
router.post('/', async (req, res) => {
  const { userId, content } = req.body;
  const story = new Story({ userId, content });
  await story.save();
  res.status(201).json(story);
});

// Like a story
router.post('/:id/like', async (req, res) => {
  const story = await Story.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
  res.json(story);
});

// Comment on a story
router.post('/:id/comment', async (req, res) => {
  const { userId, content } = req.body;
  const story = await Story.findByIdAndUpdate(
    req.params.id,
    { $push: { comments: { userId, content } } },
    { new: true }
  );
  res.json(story);
});

// Flag a story
router.post('/:id/flag', async (req, res) => {
  const story = await Story.findByIdAndUpdate(req.params.id, { $inc: { flags: 1 } }, { new: true });
  if (story.flags >= 5) {
    await Story.findByIdAndDelete(req.params.id);
    return res.json({ status: 'deleted due to flags' });
  }
  res.json({ status: 'flagged', story });
});

// Get latest contributors
router.get('/contributors/latest', async (req, res) => {
  const latestStories = await Story.find({ flags: { $lt: 5 } }).sort('-createdAt').limit(10);
  const uniqueUserIds = [...new Set(latestStories.map(s => s.userId))];
  const top3 = uniqueUserIds.slice(0, 3);
  const moreCount = uniqueUserIds.length - top3.length;

  const avatars = await Promise.all(top3.map(async userId => {
    const user = await User.findOne({ userId });
    return {
      userId,
      avatarUrl: user?.avatarUrl
    };
  }));

  res.json({ avatars, moreCount });
});