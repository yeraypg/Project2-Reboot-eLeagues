const mongoose = require('mongoose')

const trophySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String
    }
})

const TrophyModel = mongoose.model('trophy', trophySchema)

module.exports = TrophyModel