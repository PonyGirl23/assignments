const express = require('express')
const bodyParser = require('body-Parser')
const uuid = require('uuid')
const PORT = 9999;

const DATABASE = [];

const app = express();
app.use(bodyParser.json());

app.route("/data")
    .get((req, res) => {
        // console.log('What Up?');
        res.send(DATABASE)
    })
    .post((req, res) => {
        // create new data
        const newData = req.body;
        //  must give id to new object
        newData._id = uuid();
        // save to our database
        DATABASE.push(req.body);
        // send data back
        res.send(newData);
    })

app.route("/data/:id")
    // must grab data by id
    .get((req, res) => {
        const foundData = Database.find(data => data._id === req.params.id);
        res.send(foundData);
    })
    .put((req, res) => {
        // get data by id
        const editData = DATABASE.find(data => data._id === req.params.id);
        // edit data
        for (let key in req.body) {
            editData[key] = req.body[key]
        }
        // send edited data back
        res.send(editData);
    })
    .delete((req, res) => {
        // must grab data by id
        const deleteData = DATABASE.find(data => data._id === req.params.id);
        // delete data
        DATABASE.splice(DATABASE.indexOf(deleteData))
        // send back object w/o what was deleted
        res.send(deleteData);
    })


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

