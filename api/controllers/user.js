const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const user = new User({username, password});

  user
  .save()
  .then(newUser => {
    res.status(201).send(newUser)
  }).catch(err => {
    res.status(500).send('Error saving user in database')
  })
};




module.exports = {
  createUser
};
