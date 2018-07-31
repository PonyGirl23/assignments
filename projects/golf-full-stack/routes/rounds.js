const express = require('express')
const roundRouter = express.Router()
const Round = require('../models/rounds')

roundRouter.route('/')
    .get((req, res) => {
        Round.find((err, routes) => {
            if (err) return res.status(500).send(err)
            res.send(routes)
        })
    })

    .post((req, res) => {
        const newRound = new Round(req.body)
        newRound.save((err, savedRound) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(savedRound)
        })
    })

roundRouter.route('/:id')
    .get((req, res) => {
        Round.findById(req.params.id, (err, foundRound) => {
            if (err) return res.status(500).send(err)
            return res.send(foundRound)
        })
    })

    .put((req, res) => {
        Round.findByIdAndUpdate(req.params.id, req.body,
        { new: true }, (err, updatedRound) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(updatedRound)
        })
    })

    .delete((req, res) => {
        Round.findByIdAndRemove(req.params.id, (err) => {
            if (err) return res.status(500).send(err)
            return res.status(204).send()
        })
    })
    
module.exports = roundRouter