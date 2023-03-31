const express = require('express');
const router = express.Router();

//Default credentials
const validEmail = 'admin@sample.com';
const validPassword = '#admIN99';

let tokens = {};

router.post('/signin', (req, res) => {
  const { email, password } = req.body;

  if (email === validEmail && password === validPassword) {
    const token = uuid.v4();
    const expiresAt = Date.now() + 300000; // 5 minutes from now
    tokens[token] = expiresAt;

    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

module.exports = router;