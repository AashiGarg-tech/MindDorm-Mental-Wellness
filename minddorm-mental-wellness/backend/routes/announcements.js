const express = require('express');
const router = express.Router();
const Announcement = require('../models/Announcement');

// Get upcoming announcements
router.get('/', async (req, res) => {
  const today = new Date();
  const upcoming = await Announcement.find({ date: { $gte: today } }).sort('date');
  res.json(upcoming);
});

// Add a new announcement
router.post('/', async (req, res) => {
  const { title, description, date } = req.body;
  const newAnnouncement = new Announcement({ title, description, date });
  await newAnnouncement.save();
  res.status(201).json(newAnnouncement);
});