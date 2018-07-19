const express = require('express')
const bodyParser = require('body-Parser')
const uuid = require('uuid')
const PORT = 9998

const bounties = [];

const app = express();
app.use(bodyParser.json());

app.route('/bounty')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(req.body);
        res.send(newBounty);
    })

    app.route('/bounty/:id')

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
