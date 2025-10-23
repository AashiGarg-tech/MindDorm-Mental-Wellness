const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Update user profile
router.put('/:userId', async (req, res) => {
  const { username, avatarUrl } = req.body;
  const updated = await User.findOneAndUpdate(
    { userId: req.params.userId },
    { username, avatarUrl, updatedAt: new Date() },
    { new: true }
  );
  res.json(updated);
});