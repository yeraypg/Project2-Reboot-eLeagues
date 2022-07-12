const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    nick: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number
    },
    team: {
        type: String
    },
    rol: {
        type: String,
        enum: ['Organizer', 'TeamLeader', 'User'],
        default: 'User'
    },
    games: {
        type: String
    },
    trophies: {
        type: String
    }
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel