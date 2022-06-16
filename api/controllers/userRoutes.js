const userRoutes = require('express').Router()
const UserModel = require('../db/models/User')
const bcrypt = require('bcrypt')

userRoutes.post('/', async (req, res) => {
  const cuerpinho = req.body
  const { password } = cuerpinho
  const passwordHash = await bcrypt.hash(password, 10)
  delete cuerpinho.password

  // console.log(username)
  const newUser = new UserModel({ ...cuerpinho, passwordHash })
  newUser.save().then(user => res.send(user))
})

userRoutes.get('/', (req, res) => {
  UserModel.find({}).then(resaaa => res.send(resaaa))
})

module.exports = userRoutes
