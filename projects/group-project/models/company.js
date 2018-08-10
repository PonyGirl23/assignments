const mongoose = require('mongoose')
const { Schema } = mongoose

const companySchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    companyContact: {
        type: String,
        required: true
    },
    sport: {
        type: string,
        required: true
    },
    about: String,
    athletes: String,
    // pastEvents: String,
    // futureEvents: String,
    photos: [],
    id: String,
    createdAt: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    followersCount: Number,
    // followers: [],
    followingCount: Number,
    //  following: [],
    postsCount: Number,
    // posts: [],
    likesCount: Number,
    //  likes: [],
    avatar: String,
    isLoggedIn: Boolean,
    lastLogin: String

})
module.exports = mongoose.model('Company', companySchema)