const express = require('express');
const router = express.Router();
const { validateClaims } = require('../utils/validateClaims');
const { verifyJWT } = require('../middlewares/middlewareJwt');


router.get('/validate-jwt', verifyJWT, (req, res) => {
    const claims = req.user;
    const isValid = validateClaims(claims);
    res.json({ success: isValid });
});

module.exports = router;