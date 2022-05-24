
const User = require('../models/userModel')

exports.getAllUsers = (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => err.status(404).json({ message: 'No users found' }))
}

exports.getUser = (req, res) => {
  User.findById(id)
    .then(user => res.json(user))
    .catch(err => err.status(404).json({ message: 'No user found' }))
}

exports.createUser = (req, res) => {
  User.create(req.body)
    .then(user => res.json({ message: 'user was created', user }))
    .catch(err => err.status(400).json({ error: err }))
}
