const express = require('express');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signin', (req, res) => {
  const { email, password } = req.body;
  const token = authController.signIn(email, password);
  if (token) {
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;