const mongoose = require('mongoose')
const { Schema } = mongoose

// Model should be capitalized and singular
const roundSchema = new Schema({
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    },
    roundName: {
        type: String,
        required: true
    },
    date: Date,
    holes: [{
        num: Number,
        strokes: Number,
        puts: Number,
        notes: String
    }],
})

module.exports = mongoose.model('Round', roundSchema)