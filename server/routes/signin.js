const express = require('express');
const router = express.Router();
const authController = require('../controllers/signinController');

router.post('/', authController.login);

module.exports = router;