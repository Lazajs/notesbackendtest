const userRoutes = require('express').Router()
const UserModel = require('../db/models/User')
const bcrypt = require('bcrypt')

userRoutes.post('/', async (req, res) => {
  const cuerpinho = req.body
  console.log(cuerpinho)
  const { password } = cuerpinho
  const passwordHash = await bcrypt.hash(password, 10)
  delete cuerpinho.password

  const newUser = new UserModel({ ...cuerpinho, passwordHash })
  newUser.save().then(user => res.status(204).end())
})

userRoutes.post('/register', async (req, res) => {
  const { username, password } = req.body

  const documents = await UserModel.find({ username })
  documents.forEach(async (el) => {
    const match = await bcrypt.compare(password, el.passwordHash)
    if (match) res.status(200).end()
    else res.status(404).end()
  })
})

module.exports = userRoutes
