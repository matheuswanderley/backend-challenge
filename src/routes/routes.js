const express = require('express');
const router = express.Router();
const { verifyJWT } = require('../middlewares/middlewareJwt');


router.get('/validate-jwt', verifyJWT, (req, res) => {
    res.json({ success: req.userIsValid });
});

module.exports = router;