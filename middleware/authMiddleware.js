const { verifyToken } = require('../utils/authUtils');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded.email;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
