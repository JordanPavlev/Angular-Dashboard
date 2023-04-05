const express = require('express');
const router = express.Router();
const { login } = require('../controllers/signinController');

const { getProducts } = require('../controllers/productsController');

router.get('/', ( getProducts));

module.exports = router;