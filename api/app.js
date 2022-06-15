const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')
const connectDB = require('./db/mongo')
const noteRoutes = require('./controllers/noteRoutes')

connectDB() // connects to the cluster of mongodb atlas

app.use(cors())
app.use(express.json())
app.use('/notes', noteRoutes) // Every endpoint for the /notes path

app.listen(PORT, () => console.log(`Server on port ${PORT}`))
