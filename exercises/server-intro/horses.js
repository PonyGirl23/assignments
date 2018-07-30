const express = require('express')
const bodyParser = require('body-Parser')
const uuid = require('uuid')
const PORT = 9999

const Horses = [];
// const logger = require('./logger');

const app = express();
app.use(bodyParser.json());

// Middleware:
// app.use(logger); 

app.route('/horse')
    .get((req, res) => {
        res.send(Horses)
    })
    .post((req, res) => {
        const newHorse = req.body;
        newHorse._id = uuid();
        Horses.push(req.body);
        res.send(newHorse);
    })

app.route('/horse/:id')
    .get((req, res) => {
        res.send(Horses.filter(horse => {
            for (key in req.query) {
                if (String(horse[key]) !== req.query[key]) {
                    return false;
                }
            }
            return true;
        })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));