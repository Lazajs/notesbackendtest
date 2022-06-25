const noteRoutes = require('express').Router()
const NotesModel = require('../db/models/Note')
const UserModel = require('../db/models/User')
const UserExtractor = require('../middlewares/UserExtractor')

noteRoutes.post('/', UserExtractor, async (req, res) => { // adds a new note, and send it again
  const data = req.body
  const { id, username } = req
  console.log('LOLLLLLL' + req)
  delete data.userId
  const newNote = new NotesModel({
    ...data,
    userID: id,
    name: username
  })

  const saved = await newNote.save()
  const { content, _id, important, date, name } = saved
  const idNote = _id

  const currUser = await UserModel.findById(id)
  currUser.notes = currUser.notes.concat(idNote)
  await currUser.save()

  res.send({ content, important, date, name, id: idNote })
})

noteRoutes.delete('/:id', UserExtractor, (req, res) => { // deletes the note, returns the status
  NotesModel.findByIdAndDelete(req.params.id).then(del => {
    res.status(200).end()
  }).catch(err => res.status(400, err))
})

noteRoutes.put('/', UserExtractor, (req, res) => { // Updates a note, returns the status
  const { id, content } = req.body.data

  NotesModel.findByIdAndUpdate(id, { content })
    .then(res.status(204).end())
    .catch(e => res.status(400).end())
})

module.exports = noteRoutes
