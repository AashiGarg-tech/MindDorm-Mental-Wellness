// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// // Load environment variables (critical for JWT_SECRET)
// dotenv.config();

// // The secret key used to sign and verify JWTs. 
// // It MUST match the key used in your login/registration route.
// // JWT_SECRET is usually defined in your backend/.env file.
// const JWT_SECRET = process.env.JWT_SECRET; 

// /**
//  * Middleware to authenticate requests using a JSON Web Token (JWT).
//  * It verifies the token found in the Authorization header.
//  */
// const authenticateToken = (req, res, next) => {
//   // 1. Check for token presence in the Authorization header
//   const authHeader = req.headers['authorization'];
//   // Token is expected in the format: 'Bearer TOKEN_STRING'
//   const token = authHeader && authHeader.split(' ')[1]; 

//   if (token == null) {
//     // 401 Unauthorized: Token is missing
//     return res.status(401).json({ message: 'Access denied. Authentication token missing.' });
//   }

//   // 2. Verify the token using the secret key
//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) {
//       // 403 Forbidden: Token is invalid, expired, or tampered with
//       return res.status(403).json({ message: 'Invalid or expired token.' });
//     }
    
//     // 3. Token is valid. Attach the decoded user payload (e.g., { id: '...' }) to the request object
//     // The route handler can now access the user's ID via req.user.id
//     req.user = user;
    
//     // 4. Move on to the next middleware or the final route handler
//     next();
//   });
// };

// export default authenticateToken;
