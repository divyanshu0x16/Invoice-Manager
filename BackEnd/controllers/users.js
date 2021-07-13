const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../models/user');

router.get('/', async (request, response) => {
  const users = await User.find({}).populate('invoices');

  response.json(users.map((u) => u.toJSON()));
});

router.post('/', async (request, response) => {
  const { password, name, username } = request.body;

  if (!password || password.length < 3) {
    return response.status(403).send({
      error: 'password must min length 3',
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  try {
    const savedUser = await user.save();
    return response.json(savedUser);
  } catch (error) {
    return response.status(400).json(error.message);
  }
});

module.exports = router;
