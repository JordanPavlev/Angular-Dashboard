function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Your authorization is not Bearer.' });
  }

  const token = authHeader.substring(7);
  const tokenExpirationTime = req.app.locals.tokens[token];

  if (!tokenExpirationTime || Date.now() > tokenExpirationTime) {
    return res.status(401).json({ error: 'Token expiration time has passed, sign in again to get new token.' });
  }

  req.locals = { token };
  next();
}

module.exports = {
  authMiddleware
};