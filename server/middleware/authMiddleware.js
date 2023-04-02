const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const tokenExpirationTime = req.app.locals.tokens[token];
    if (!token || !tokenExpirationTime || Date.now() > tokenExpirationTime) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
  };
  
  module.exports = { authenticateToken };