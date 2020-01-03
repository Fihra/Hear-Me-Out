const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    alias: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    mainRole: {
        type: String,
        required: false
    },
    otherRoles: {
        type: Array,
        required: false
    },
    instruments: {
        type: Array,
        required: false
    },
    featuredYoutube: {
        type: String,
        required: false
    },
    youtubeChannel: {
        type: String,
        required: false
    },
    bandcampLink: {
        type: String,
        required: false
    },
    spotifyLink: {
        type: String,
        required: false
    },
    mainWebsite: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model('Users', UserSchema);