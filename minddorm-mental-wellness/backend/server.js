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

// // 👇 IMPORT THE NEW MOOD ROUTES FILE
// import moodRoutes from "./routes/moodRoutes.js"; 
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

// --- Custom Routes (using ES Modules - export default) ---
import moodRoutes from "./routes/moodRoutes.js"; 

// --- Database/Auth Imports (Likely CommonJS - require) ---
// We must use 'await import()' for these routes in the 'app.use' section below
// to handle the mix of module types safely.
import { authRoutes } from "./routes/auth.js"; 
import pool from "./config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

// Get the URI after dotenv has run
const MONGO_URI = process.env.MONGODB_URI;

// Log the URI to confirm it's loading the Atlas string
console.log('Attempting connection with URI:', MONGO_URI); 

// 🔌 MongoDB Connection (Removed deprecated options)
mongoose.connect(MONGO_URI)
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB error:", err));


// ⚠️ Asynchronous Route Setup Function ⚠️
// We need an async function because we must use 'await import()' for CommonJS files.
const setupRoutes = async () => {
    
    // 🔐 Authentication Routes (If this file uses named exports, this works)
    app.use("/api/auth", authRoutes);

    // 📣 CommonJS Route Files (Requires dynamic import)
    // We use .default because dynamic import returns a module object, 
    // and the router is usually the 'default' export of a CommonJS file.
    app.use("/api/announcements", (await import('./routes/announcements.js')).default);
    app.use("/api/stories", (await import('./routes/stories.js')).default);
    app.use("/api/chat", (await import('./routes/chat.js')).default);
    app.use("/api/users", (await import('./routes/users.js')).default);

    // ✅ Your New Mood Tracker Route (ES Module)
    app.use("/api/moods", moodRoutes); 
    
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

    // Start the server ONLY after all asynchronous imports are done
    app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
};

// Execute the asynchronous setup function
setupRoutes();
