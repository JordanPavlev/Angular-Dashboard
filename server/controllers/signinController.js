const uuid = require('uuid').v4;

const login = (req, res) => {
  const { email, password } = req.body;
  if (email === 'asd' && password === 'asd123') {
    const token = uuid();
    const expirationTime = 5 * 60 * 1000; // 5 minutes in milliseconds
    req.app.locals.tokens = req.app.locals.tokens || {};
    req.app.locals.tokens[token] = Date.now() + expirationTime;
    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ error: 'Invalid email or password', email, password });
  }
};

module.exports = { login };