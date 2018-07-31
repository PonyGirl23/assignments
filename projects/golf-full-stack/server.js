// Dependecies:
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Variables:
const PORT = 9997
const MONGODB_URI = 'mongodb://localhost:27017/golf'
const app = express()

// Middlewear:
app.use(bodyParser.json())

// Routes
app.use('/stats', require('./routes/stats'))
app.use('/courses', require('./routes/courses'))
app.use('/rounds', require('./routes/rounds'))

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
    .then(() => console.log('connected to MongoDB'))
    .catch(err => console.log(err))
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))




