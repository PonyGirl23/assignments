
const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid')

// Fake database:
const bounties = [];

// Writing routes:
bountyRouter.route('/')
    .get((req, res) => {
        // console.log('hello');
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(req.body);
        res.send(newBounty);
    })

bountyRouter.route('/:id')
    .get((req, res) => {
        const foundBounty = bounties.find(bounty => bounty._id === req.params.id);
        res.send(foundBounty);
    })
    .put((req, res) => {
        const editBounty = bounties.find(bounty => bounty._id === req.params.id);
        for (let key in req.body) {
            editBounty[key] = req.body[key]
        }
        res.send(editBounty);
    })
    .delete((req, res) => {
        const deleteBounty = bounties.find(bounty => bounty._id === req.params.id);
        bounties.splice(bounties.indexOf(deleteBounty), 1)
        res.send(deleteBounty);
    })

module.exports = bountyRouter;