// Dependencies:
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Variables:
const PORT = 9990
const MONGODB_URI = 'mongodb://localhost27017/group'
const app = express()

// Middlewear:
app.use(bodyParser.json())

// Routes:
// app.use(())
// app.use(())
// app.use(())

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log('connected to MongoDB'))
    .catch(err => console.log(err))
app.listen(PORT, () => console.log(`server running on port ${PORT}`))