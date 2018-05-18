const { authenticate } = require('../utils/middlewares');

const { getAllJokes, createUser, login } = require('../controllers');


const User = require('../models/userModels');


module.exports = server => {

// to check all users
  server.get('/api/allusers', (req, res) => {
    User.find()
    .then(resp => res.status(200).json(resp))
    .catch(err => console.log(err))
  });
//------------------------------
  server.get('/api/jokes', authenticate, getAllJokes);
  server.route('/api/users').post(createUser);
  server.route('/api/login').post(login);
};
