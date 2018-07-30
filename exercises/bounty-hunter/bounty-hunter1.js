// const express = require('express')
// const bodyParser = require('body-Parser')
// const uuid = require('uuid')
// const PORT = 9998

// const bounties = [];

// const app = express();
// app.use(bodyParser.json());

// app.route('/bounty')
//     .get((req, res) => {
//         res.send(bounties)
//     })
//     .post((req, res) => {
//         const newBounty = req.body;
//         newBounty._id = uuid();
//         bounties.push(req.body);
//         res.send(newBounty);
//     })

// app.route('/bounty/:id')
//     .get((req, res) => {
//         const foundBounty = bounties.find(bounty => bounty._id === req.params.id);
//         res.send(foundBounty);
//     })
//     .put((req, res) => {
//         const editBounty = bounties.find(bounty => bounty._id === req.params.id);
//         for (let key in req.body) {
//             editBounty[key] = req.body[key]
//         }
//         res.send(editBounty);
//     })
//     .delete((req, res) => {
//         const deleteBounty = bounties.find(bounty => bounty._id === req.params.id);
//         bounties.splice(bounties.find.indexOf(deleteBounty))
//         res.send(deleteBounty);
//     })


// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
