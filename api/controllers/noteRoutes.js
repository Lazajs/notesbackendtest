const noteRoutes = require('express').Router()
const NotesModel = require('../db/models/Note')

noteRoutes.get('/', (req, res) => { // gets all the notes
  NotesModel.find({}).then(data => res.send(data))
})

noteRoutes.post('/', (req, res) => { // adds a new note, and send it again
  const data = req.body

  const newNote = new NotesModel({
    ...data
  })
  newNote.save().then(saved => {
    const { content, _id, important, date, name } = saved
    const id = _id
    res.send({ id, content, important, date, name })
  })
})

noteRoutes.delete('/:id', (req, res) => { // deletes the note, returns the status
  NotesModel.findByIdAndDelete(req.params.id).then(del => {
    res.status(200).end()
  }).catch(err => res.status(400, err))
})

noteRoutes.put('/', (req, res) => { // Updates a note, returns the status
  const { id, content } = req.body.data

  NotesModel.findByIdAndUpdate(id, { content })
    .then(res.status(204).end())
    .catch(e => res.status(400).end())
})

module.exports = noteRoutes
