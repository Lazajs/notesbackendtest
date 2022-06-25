const userRoutes = require('express').Router()
const UserModel = require('../db/models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

userRoutes.post('/', async (req, res) => {
  const cuerpinho = req.body
  const { password } = cuerpinho
  const passwordHash = await bcrypt.hash(password, 10)
  delete cuerpinho.password

  const newUser = new UserModel({ ...cuerpinho, passwordHash })
  newUser.save().then(user => res.status(204).end())
})

userRoutes.post('/login', async (req, res) => {
  const { username, password } = req.body

  const documents = await UserModel.find({ username }).populate('notes')

  documents.forEach(async (el) => {
    const match = await bcrypt.compare(password, el.passwordHash)

    if (match) {
      const userForToken = { username: el.username, id: el._id } // usuario para el que se creara el token
      const token = jwt.sign(userForToken, '123') // firma del token, segundo parametro es la firma secreta, tercero el tiempo de expiracion en segundos

      const usuario = {
        username: el.username,
        notes: el.notes,
        userToken: token
      }

      res.status(200).send({ user: usuario })
    } else res.status(404).end()
  })
})

module.exports = userRoutes
