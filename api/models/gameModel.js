const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const companySchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: categorySchema,
    company: companySchema,
    image: {
        type: String
    }
})

const GameModel = mongoose.model('game', gameSchema)

module.exports = GameModel