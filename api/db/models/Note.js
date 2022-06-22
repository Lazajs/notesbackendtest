const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  name: String,
  date: String,
  content: String,
  important: Boolean,
  userID: String
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note
