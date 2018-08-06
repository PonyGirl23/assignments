const express = require('express')
const courseRouter = express.Router()
const Course = require('../models/courses')

courseRouter.route('/')
    .get((req, res) => {
        console.log('yo')
        Course.find((err, routes) => {
            if (err) return res.status(500).send(err)
            return res.send(routes)
        })
    })

    .post((req, res) => {
        console.log(req.body)
        const newCourse = new Course(req.body)
        newCourse.save((err, savedCourse) => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(savedCourse)
        })
    })

courseRouter.route('/:id')
    .get((req, res) => {
        Course.findById(req.params.id, (err, foundCourse) => {
            if (err) return res.status(500).send(err)
            return res.send(foundCourse)
        })
    })

    .put((req, res) => {
        Course.findByIdAndUpdate(req.params.id, req.body,
            { new: true }, (err, updatedCourse) => {
                if (err) return res.status(500).send(err)
                return res.status(201).send(updatedCourse)
            })
    })

    .delete((req, res) => {
        Course.findByIdAndRemove(req.params.id, (err) => {
            if (err) return res.status(500).send(err)
            return res.status(204).send()
        })
    });

courseRouter.route("/:id/holes")
    .get((req, res) => {
        const { id } = req.params;
        Course.findById(id)
            .exec((err, course) => {
                res.status(200).send(course.holes);
            })
    })
    .post((req, res) => {
        const { id } = req.params;
        Course.findById(id)
            .exec((err, course) => {
                course.holes.push(req.body);
                course.save((err, savedCourse) => {
                    res.status(201).send(savedCourse.holes[course.holes.length - 1])
                })
            })
    });
courseRouter.route("/:id/holes/:holeId")
    .put((req, res) => {
        const { id, holeId } = req.params;
        Course.findById(id)
            .exec((err, course) => {
                const hole = course.holes.id(holeId);
                hole.set(req.body)
                course.save((err, savedCourse) => {
                    res.status(200).send(savedCourse.holes.id(holeId));
                })
            })
    })


module.exports = courseRouter