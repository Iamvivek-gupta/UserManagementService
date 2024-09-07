const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateToken } = require('../utils/authUtils');

exports.register = async (req, res) => {
  const { email, username, password_hash } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      email,
      username,
      password_hash: await bcrypt.hash(password_hash, 10),
    });

    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.login = async (req, res) => {
  const { email, password_hash } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    const isMatch = await bcrypt.compare(password_hash, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    
    const token = generateToken(user);
    res.json({token})
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findOne({email: req.user}).select('-password_hash');
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
