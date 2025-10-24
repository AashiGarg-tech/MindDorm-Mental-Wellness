import jwt from 'jsonwebtoken'; // 1. Change 'require' to 'import'

// Assuming environment variables are loaded in server.js
// process.env works fine in ESM
const JWT_SECRET = process.env.JWT_SECRET; 

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // Expected format: "Bearer <TOKEN>"
  const token = authHeader && authHeader.split(' ')[1]; 

  if (token == null) {
    // 401: Unauthorized (No token)
    return res.status(401).json({ message: 'Access denied. Please log in.' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      // 403: Forbidden (Invalid/Expired token)
      return res.status(403).json({ message: 'Invalid or expired session. Please log in again.' }); 
    }
    
    // Token is valid! Attach the user payload (containing the id/userId) to the request
    req.user = user; 
    next(); // Move to the next function (the route handler)
  });
};

// 2. Change 'module.exports' to 'export default'
export default authenticateToken; 
