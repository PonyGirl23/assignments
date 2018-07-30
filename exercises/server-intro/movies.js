const express = require('express')
const bodyParser = require('body-Parser')
const uuid = require('uuid')
const PORT = 9999;

const MOVIES= [];

const app = express();
app.use(bodyParser.json());

app.route("/movies")
    .get((req, res) => {
        // console.log(req.query);
        res.send(MOVIES.filter(movie => req.query.year ? movie.year === +req.query.year : true));
        // + converts it to a number
    })
    .post((req, res) => {
        // create new data
        const newMovie = req.body;
        //  must give id to new object
        newMovie._id = uuid();
        // save to our database
        MOVIES.push(req.body);
        // send data back
        res.send(newMovie);
    })

app.route("/movies/:id")
    // must grab data by id
    .get((req, res) => {
        const foundMovie =  MOVIES.find(movie => movie._id === req.params.id);
        res.send(foundMovie);
    })
    .put((req, res) => {
        // get data by id
        const editMovie = MOVIES.find(movie => movie._id === req.params.id);
        // edit data
        for (let key in req.body) {
            editMovie[key] = req.body[key]
        }
        // send edited data back
        res.send(editMovie);
    })
    .delete((req, res) => {
        // must grab data by id
        const deleteMovie = MOVIES.find(movie => movie._id === req.params.id);
        // delete data
        MOVIES.splice(MOVIES.indexOf(deleteMovie))
        // send back object w/o what was deleted
        res.send(deleteMovie);
    })


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

