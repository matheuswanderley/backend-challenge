const jwt = require('jsonwebtoken');
const { validateClaims } = require('../utils/validateClaims');
const { validMessagesWhenTokenIsInvalidOrMissing, HTTP_STATUS_FORBIDDEN, HTTP_STATUS_OK, HTTP_STATUS_UNAUTHORIZED } = require('../utils/constants')

const verifyJWT = (req, res) => {
    const token = req.query.token;
    if (!token) {
        return res.status(HTTP_STATUS_FORBIDDEN).json({ success: false, message: validMessagesWhenTokenIsInvalidOrMissing.token_missing });
    }

    try {
        const decodedPayload = jwt.decode(token);
        const isValid = validateClaims(decodedPayload);
        return res.status(HTTP_STATUS_OK).json({ success: true, isValid });
    } catch (error) {
        return res.status(HTTP_STATUS_UNAUTHORIZED).json({ success: false, message: validMessagesWhenTokenIsInvalidOrMissing.token_invalid, error: error });
    }
};

module.exports = { verifyJWT };