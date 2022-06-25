const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
  const authorization = request.get('Authorization')
  let token = ''

  if (authorization && authorization.toLowerCase().includes('bearer')) {
    token = authorization.substring(7)
  }

  const decodedToken = jwt.verify(token, '123')

  if (!token && !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const { id, username } = decodedToken

  request.id = id
  request.username = username

  next()
}
