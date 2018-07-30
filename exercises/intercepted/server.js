

const express = require('express')
const bodyParser = require('body-Parser')
const uuid = require('uuid')
const PORT = 9999;

const app = express();
app.use(bodyParser.json());

app.use('/movies', require('./routes/movies'))
// app.use('/actors', require('./routes/actors'))


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

