const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    leader: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teamleader'
    }],
    leagues: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'league'
    }]
})

const TeamModel = mongoose.model('team', teamSchema)

module.exports = TeamModel