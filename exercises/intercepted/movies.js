const express = require('express')
const movieRoutes = express.Router()
const uuid = require('uuid')

const MOVIES = require("../movies.json");

movieRoutes
    .get('/', (req, res) => {
        res.send(MOVIES.filter(movie => {
            for (key in req.query) {
                if (String(movie[key].toLowerCase()) !== req.query[key].toLowerCase) {
                    return false;
                }
            }
            return true;

        }))
    })
    .post("/", (req, res) => {
        // create new data
        const newMovie = req.body;
        //  must give id to new object
        newMovie._id = uuid();
        // save to our database
        MOVIES.push(newMovie);
        // send data back
        res.send(newMovie);
    })

movieRoutes.get("/:id", (req, res) => {
    const foundMovie = MOVIES.find(movie => movie._id === req.params.id);
    res.send(foundMovie);
})
    .put("/:id", (req, res) => {
        // get data by id
        const editMovie = MOVIES.find(movie => movie._id === req.params.id);
        // edit data
        for (let key in req.body) {
            editMovie[key] = req.body[key]
        }
        // send edited data back
        res.send(editMovie);
    })

    .delete("/:id", (req, res) => {
        // must grab data by id
        const deleteMovie = MOVIES.find(movie => movie._id === req.params.id);
        // delete data
        MOVIES.splice(MOVIES.indexOf(deleteMovie))
        // send back object w/o what was deleted
        res.send(deleteMovie);
    })

module.exports = movieRoutes;


