const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')
const connectDB = require('./db/mongo')
const NotesModel = require('./db/models/Note')

connectDB() // connects to the cluster of mongodb atlas
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => { // gets all the notes
  NotesModel.find({}).then(data => res.send(data))
})

app.post('/', (req, res) => { // adds a new note, and send it again
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

app.delete('/:id', (req, res) => {
  NotesModel.findByIdAndDelete(req.params.id).then(del => {
    res.status(200).end()
  }).catch(err => res.status(400, err))
})

app.listen(PORT, () => console.log(`Server on port ${PORT}`))
