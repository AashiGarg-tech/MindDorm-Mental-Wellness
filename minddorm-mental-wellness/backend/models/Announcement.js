// const mongoose = require('mongoose');

// const announcementSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   date: { type: Date, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Announcement', announcementSchema);

// Assuming the original file looked like this:
// const mongoose = require('mongoose');
// const AnnouncementSchema = ...
// const Announcement = mongoose.model('Announcement', AnnouncementSchema);
// module.exports = Announcement;

import mongoose from 'mongoose'; // Change: require -> import

const AnnouncementSchema = new mongoose.Schema({
  // Add your Announcement schema fields here (e.g., title, description, date)
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, { timestamps: true });

const Announcement = mongoose.model('Announcement', AnnouncementSchema);

export default Announcement; // Change: module.exports -> export default
