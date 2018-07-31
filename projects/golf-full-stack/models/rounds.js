const mongoose = require('mongoose')
const { Schema } = mongoose

// Model should be capitalized and singular
const roundSchema = new Schema({
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    },
    name: String,
    date: Date
})

module.exports = mongoose.model('Round', roundSchema)