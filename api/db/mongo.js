require('dotenv').config()
const mongoose = require('mongoose')
const CONNECTION_STR = process.env.CONNECTION

module.exports = () => {
  mongoose.connect(CONNECTION_STR)
    .then(console.log('Connected to db'))
    .catch(console.log)
}
