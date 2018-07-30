// dependencies:
const express = require('express')
const bodyParser = require('body-Parser')
const mongoose = require ('mongoose')
const morgan = require("morgan")


// import routes here:

// variables:
const PORT = 9998
const MONGODB_URI = 'mongodb://localhost:27017/bounties'

// App:
const app = express()

// Middleware:
app.use(bodyParser.json())
app.use(morgan("dev"))

// Routes:
app.use('/bounties', require('./routes/bounties'))

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
.then(() => console.log('connected to MongoDB'))
.catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
