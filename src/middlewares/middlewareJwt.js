const jwt = require('jsonwebtoken');
const { validateClaims } = require('../utils/validateClaims');

const verifyJWT = (req, res, next) => {
    const token = req.query.token;
    if (!token) {
        return res.status(403).json({ success: false, message: "Token is missing." });
    }

    try {
        const decoded = jwt.verify(token, Buffer.from(process.env.JWT_SECRET, 'base64'));
        console.log("@@@@@@@@@@@@@@@@@@@@@@@", decoded)
        if (!validateClaims(decoded)) {
            return res.status(401).json({ success: false, message: "Invalid claims." });
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid Token" });
    }
};

module.exports = { verifyJWT };