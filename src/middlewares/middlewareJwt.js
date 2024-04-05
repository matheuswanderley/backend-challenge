const jwt = require('jsonwebtoken');
const { validateClaims } = require('../utils/validateClaims');

const verifyJWT = (req, res, next) => {
    const token = req.query.token;
    if (!token) {
        return res.status(403).json({ success: false, message: "Token is missing." });
    }

    try {
        const decodedPayload = jwt.decode(token);
        const isValid = validateClaims(decodedPayload);
        return res.status(200).json({ success: true, isValid });
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid Token", error: error });
    }
};

module.exports = { verifyJWT };