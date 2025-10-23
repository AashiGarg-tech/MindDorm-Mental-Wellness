const express = require('express');
const router = express.Router();
const ChatMessage = require('../models/ChatMessage');

// Get all messages
router.get('/', async (req, res) => {
  const messages = await ChatMessage.find({ flags: { $lt: 5 } }).sort('-createdAt');
  res.json(messages);
});

// Post a new message
router.post('/', async (req, res) => {
  const { userId, avatarUrl, content } = req.body;
  const newMessage = new ChatMessage({ userId, avatarUrl, content });
  await newMessage.save();
  res.status(201).json(newMessage);
});

// Reply to a message
router.post('/:id/reply', async (req, res) => {
  const { userId, avatarUrl, content } = req.body;
  const message = await ChatMessage.findByIdAndUpdate(
    req.params.id,
    { $push: { replies: { userId, avatarUrl, content } } },
    { new: true }
  );
  res.json(message);
});

// Like a message
router.post('/:id/like', async (req, res) => {
  const message = await ChatMessage.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
  res.json(message);
});

// Flag a message
router.post('/:id/flag', async (req, res) => {
  const message = await ChatMessage.findByIdAndUpdate(req.params.id, { $inc: { flags: 1 } }, { new: true });
  if (message.flags >= 5) {
    await ChatMessage.findByIdAndDelete(req.params.id);
    return res.json({ status: 'deleted due to flags' });
  }
  res.json({ status: 'flagged', message });
});