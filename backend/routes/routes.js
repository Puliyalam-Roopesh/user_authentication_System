const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(200).json({ message: 'Account created' });
  } catch (err) {
    res.status(400).json({ error: 'User already exists' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && user.password === password) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(400).json({ error: 'Invalid credentials' });
  }
});

// Forgot Password (simulate with reset)
router.post('/forgot', async (req, res) => {
  const { username } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    user.password = 'newpass123';
    await user.save();
    res.json({ message: 'Password reset to newpass123' });
  } else {
    res.status(400).json({ error: 'User not found' });
  }
});

module.exports = router;
