const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../controllers/signinController');

const { getProducts } = require('../controllers/productsController');

router.get('/products', (authenticateToken, getProducts));

module.exports = router;