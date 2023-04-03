const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../controllers/signinController');

const { getProducts } = require('../controllers/productsController');

router.get('/', (authenticateToken, getProducts));

module.exports = router;