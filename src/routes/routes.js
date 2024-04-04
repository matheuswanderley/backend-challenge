const express = require('express');
const router = express.Router();
const { validateClaims } = require('../utils/validateClaims');


router.get('/validate-jwt', (req, res) => {
    const claims = req.user;
    const isValid = validateClaims(claims);
    res.json({ success: isValid });
});

module.exports = router;