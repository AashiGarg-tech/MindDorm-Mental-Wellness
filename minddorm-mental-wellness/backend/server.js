// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import fetch from "node-fetch";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Use API key from environment file
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// app.post("/api/chat", async (req, res) => {
//   const userMessage = req.body.message;

//   try {
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           { role: "system", content: "You are a supportive AI wellness chatbot." },
//           { role: "user", content: userMessage },
//         ],
//       }),
//     });

//     const data = await response.json();
//     const botReply = data.choices[0].message.content;

//     res.json({ reply: botReply });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ reply: "Sorry, something went wrong!" });
//   }
// });

// app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));



// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import fetch from "node-fetch";
// import dotenv from "dotenv";
// //
// import mongoose from "mongoose";
// //
// import { authRoutes } from "./routes/auth.js"; // ✅ Named import

// //
// import announcementsRoutes from "./routes/announcements.js";
// import storiesRoutes from "./routes/stories.js";
// import chatRoutes from "./routes/chat.js";
// import usersRoutes from "./routes/users.js";
// //

// import pool from "./config/db.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// dotenv.config();

// const app = express();
// const PORT = 5000;

// // ✅ Allow frontend to connect (adjust port if needed)
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(bodyParser.json());


// //🔌 MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log("✅ Connected to MongoDB"))
//   .catch(err => console.error("❌ MongoDB error:", err));

// //


// // 🔐 Authentication Routes
// app.use("/api/auth", authRoutes);


// // 📣 New Feature Routes
// app.use("/api/announcements", announcementsRoutes);
// app.use("/api/stories", storiesRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/users", usersRoutes);
// //


// // 🤖 Chatbot Route
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// app.post("/api/chat", async (req, res) => {
//   const userMessage = req.body.message;

//   try {
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           { role: "system", content: "You are a supportive AI wellness chatbot." },
//           { role: "user", content: userMessage },
//         ],
//       }),
//     });

//     const data = await response.json();
//     const botReply = data.choices[0].message.content;

//     res.json({ reply: botReply });
//   } catch (error) {
//     console.error("Chatbot error:", error);
//     res.status(500).json({ reply: "Sorry, something went wrong!" });
//   }
// });

// app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));

// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import fetch from "node-fetch";
// import dotenv from "dotenv";
// import mongoose from "mongoose";

// import { authRoutes } from "./routes/auth.js"; 
// //
// import announcementsRoutes from "./routes/announcements.js";
// import storiesRoutes from "./routes/stories.js";
// import chatRoutes from "./routes/chat.js";
// import usersRoutes from "./routes/users.js";
// import chatBotRoutes from "./routes/chatServer.js";
// import assessmentRoutes from "./routes/assessmentRoutes.js";

// // 👇 IMPORT THE NEW MOOD ROUTES FILE
// import moodRoutes from "./routes/moodRoutes.js"; 
// //

// import pool from "./config/db.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// dotenv.config();

// const app = express();
// const PORT = 5050;

// // ✅ Allow frontend to connect (adjust port if needed)
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(bodyParser.json());


// //🔌 MongoDB Connection (This section is already perfect)
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log("✅ Connected to MongoDB"))
//   .catch(err => console.error("❌ MongoDB error:", err));


// // 🔐 Authentication Routes
// app.use("/api/auth", authRoutes);


// // 📣 New Feature Routes
// app.use("/api/announcements", announcementsRoutes);
// app.use("/api/stories", storiesRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/users", usersRoutes);
// // 🤖 Gemini ChatBot Routes
// app.use("/api/gemini-chat", chatBotRoutes);
// app.use("/api/assessment", assessmentRoutes(pool));
// // 👇 REGISTER THE NEW MOOD TRACKER ROUTES
// app.use("/api/moods", moodRoutes); 
// //


// // 🤖 Chatbot Route (Existing code unchanged)
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// app.post("/api/chat", async (req, res) => {
//   const userMessage = req.body.message;

//   try {
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           { role: "system", content: "You are a supportive AI wellness chatbot." },
//           { role: "user", content: userMessage },
//         ],
//       }),
//     });

//     const data = await response.json();
//     const botReply = data.choices[0].message.content;

//     res.json({ reply: botReply });
//   } catch (error) {
//     console.error("Chatbot error:", error);
//     res.status(500).json({ reply: "Sorry, something went wrong!" });
//   }
// });

// app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// --- START: FIXES ---
// 1. Import Models to register them with Mongoose (fixes populate/CastError)
import User from "./models/User.js"; 
import Story from "./models/Story.js";
// --- END: FIXES ---

import { authRoutes } from "./routes/auth.js"; 
import announcementsRoutes from "./routes/announcements.js";
import storiesRoutes from "./routes/stories.js";
import chatRoutes from "./routes/chat.js";
import usersRoutes from "./routes/users.js";
import chatBotRoutes from "./routes/chatServer.js";

// 👇 IMPORT THE NEW MOOD ROUTES FILE
import moodRoutes from "./routes/moodRoutes.js"; 
//

import pool from "./config/db.js";


// 2. CRITICAL FIX: Call dotenv.config() immediately after ALL imports
dotenv.config();

const app = express();
const PORT = 5050;

// ✅ Allow frontend to connect (adjust port if needed)
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());


//🔌 MongoDB Connection (This section is already perfect)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB error:", err));


// 🔐 Authentication Routes
app.use("/api/auth", authRoutes);


// 📣 New Feature Routes
app.use("/api/announcements", announcementsRoutes);
app.use("/api/stories", storiesRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/users", usersRoutes);
// 🤖 Gemini ChatBot Routes
app.use("/api/gemini-chat", chatBotRoutes);

// 👇 REGISTER THE NEW MOOD TRACKER ROUTES
app.use("/api/moods", moodRoutes); 
//


// 🤖 Chatbot Route (Existing code unchanged)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a supportive AI wellness chatbot." },
          { role: "user", content: userMessage },
        ],
      }),
    });

    const data = await response.json();
    const botReply = data.choices[0].message.content;

    res.json({ reply: botReply });
  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({ reply: "Sorry, something went wrong!" });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
