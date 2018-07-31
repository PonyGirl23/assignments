const mongoose = require('mongoose')
const { Schema } = mongoose

// Model should be capitalized and singular
const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    holes: [{
        num: Number,
        par: Number,
        yards: Number,
    }],
})

module.exports = mongoose.model('Course', courseSchema)