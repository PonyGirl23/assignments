
const express = require('express')
const statRouter = express.Router()
const Stat = require('../models/stats')

statRouter.route('/')
    .get((req, res) => {
        Stat.find((err, routes) => {
            if (err) return res.status(500).send(err)
            res.send(routes)
        })
    })

    .post((req, res) => {
        // turn req.body into a mongoose document
        const newStat = new Stat(req.body)
        // save newly created document to the collection
        newStat.save((err, savedStat) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(savedStat)
        })
    })

statRouter.route('/:id')
    .get((req, res) => {
        // query database for a document with _id of re.params.id 
        Stat.findById(req.params.id, (err, foundStat) => {
            if (err) return res.status(500).send(err)
            return res.send(foundStat)
        })
    })

    .put((req, res) => {
        Stat.findByIdAndUpdate(req.params.id, req.body,
        { new: true }, (err, updatedStat) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(updatedStat)
        })
    })

    .delete((req, res) => {
        Stat.findByIdAndRemove(req.params.id, (err) => {
            if (err) return res.status(500).send(err)
            return res.status(204).send()
        })
    })

    module.exports = statRouter
