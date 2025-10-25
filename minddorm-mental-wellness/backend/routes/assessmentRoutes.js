import express from 'express';
// Assuming you have authentication middleware ready to populate req.userId
// import { protect } from '../middleware/authMiddleware.js'; 

// This function receives the PostgreSQL connection pool from server.js
const assessmentRoutes = (pool) => { // ⬅️ Renamed function name
    const router = express.Router();

    // 🚨 IMPORTANT: Replace mockAuthMiddleware with your actual authentication middleware
    // For now, we'll mock it to allow testing.
    const mockAuthMiddleware = (req, res, next) => {
        // In a real app, you would verify a JWT token and set req.userId
        req.userId = 1; // 💥 TEMPORARY: Hardcode user ID for testing purposes
        next();
    };


    // -------------------------------------------------------------
    // 1. POST /api/assessment/assessments - Save New Score
    // -------------------------------------------------------------
    router.post('/assessments', mockAuthMiddleware, async (req, res) => {
        const { assessment_type, score, score_level } = req.body;
        const userId = req.userId; 

        if (!assessment_type || score === undefined || !userId) {
            return res.status(400).json({ message: "Missing required assessment data or user ID." });
        }

        const queryText = `
            INSERT INTO assessment_scores 
                (user_id, assessment_type, score, score_level, taken_at)
            VALUES 
                ($1, $2, $3, $4, NOW())
            RETURNING id, taken_at;
        `;
        const values = [userId, assessment_type, score, score_level];

        try {
            const result = await pool.query(queryText, values);
            res.status(201).json({ 
                message: "Assessment score saved successfully.",
                assessmentId: result.rows[0].id
            });
        } catch (err) {
            console.error("Database error on saving assessment score:", err);
            res.status(500).json({ message: "Failed to save score." });
        }
    });


    // -------------------------------------------------------------
    // 2. GET /api/assessment/trends - Fetch Chart Data
    // -------------------------------------------------------------
    router.get('/trends', mockAuthMiddleware, async (req, res) => {
        const userId = req.userId; // Get the user ID from the mock middleware

        const queryText = `
            SELECT
                TO_CHAR(taken_at, 'YYYY-MM-DD') AS date, 
                SUM(CASE WHEN assessment_type = 'PHQ-9' THEN score ELSE NULL END) AS phq9_score,
                SUM(CASE WHEN assessment_type = 'GAD-7' THEN score ELSE NULL END) AS gad7_score,
                SUM(CASE WHEN assessment_type = 'PSS' THEN score ELSE NULL END) AS pss_score
            FROM 
                assessment_scores
            WHERE 
                user_id = $1
                AND taken_at >= NOW() - INTERVAL '30 days'
            GROUP BY 
                1 
            ORDER BY 
                date ASC;
        `;

        try {
            const result = await pool.query(queryText, [userId]);
            res.json(result.rows);
        } catch (err) {
            console.error("Database error on fetching mood trends:", err);
            res.status(500).json({ message: "Failed to retrieve chart data." });
        }
    });

    return router;
};

export default assessmentRoutes;
