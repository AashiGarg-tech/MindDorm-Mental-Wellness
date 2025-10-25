import express from 'express';
import authenticateToken from '../middleware/authenticateToken.js'; // ES module import

// Function receives PostgreSQL pool from server.js
const assessmentRoutes = (pool) => {
    const router = express.Router();

    // ------------------------------
    // POST /api/assessment/assessments
    // ------------------------------
    router.post('/assessments', authenticateToken, async (req, res) => {
        const { assessment_type, score, score_level } = req.body;
        const userId = req.userId;

        if (!assessment_type || score === undefined || !userId) {
            return res.status(400).json({ message: "Missing required assessment data or user ID." });
        }

        // 🎯 MODIFIED LOGIC: Check for existing score on the current day for GAD-7, PHQ-9, or PSS
        const restrictedTests = ['GAD-7', 'PHQ-9', 'PSS'];
        
        if (restrictedTests.includes(assessment_type)) {
            const checkQuery = `
                SELECT id 
                FROM assessment_scores
                WHERE user_id = $1
                AND assessment_type = $2
                AND taken_at::date = CURRENT_DATE;
            `;
            try {
                const existingResult = await pool.query(checkQuery, [userId, assessment_type]);
                
                if (existingResult.rows.length > 0) {
                    // Return 409 Conflict status if a score already exists today
                    return res.status(409).json({ 
                        message: `You have already completed the ${assessment_type} assessment today. Please try again tomorrow.` 
                    });
                }
            } catch (err) {
                console.error(`Database error on checking existing ${assessment_type} assessment:`, err);
                // Non-critical database error, proceed to insert
            }
        }
        
        // Original INSERT query
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
                assessmentId: result.rows[0].id,
                takenAt: result.rows[0].taken_at
            });
        } catch (err) {
            console.error("Database error on saving assessment score:", err);
            res.status(500).json({ message: "Failed to save score.", error: err.message });
        }
    });

    // ------------------------------
    // GET /api/assessment/trends (No changes needed here)
    // ------------------------------
    router.get('/trends', authenticateToken, async (req, res) => {
        const userId = req.userId;

        const queryText = `
            SELECT
                TO_CHAR(taken_at, 'YYYY-MM-DD') AS date, 
                COALESCE(SUM(CASE WHEN assessment_type = 'PHQ-9' THEN score ELSE 0 END), 0) AS phq9_score,
                COALESCE(SUM(CASE WHEN assessment_type = 'GAD-7' THEN score ELSE 0 END), 0) AS gad7_score,
                COALESCE(SUM(CASE WHEN assessment_type = 'PSS' THEN score ELSE 0 END), 0) AS pss_score
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
            res.status(500).json({ message: "Failed to retrieve chart data.", error: err.message });
        }
    });

    return router;
};

export default assessmentRoutes;