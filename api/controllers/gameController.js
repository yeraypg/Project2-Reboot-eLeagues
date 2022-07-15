const GameModel = require('../models/gameModel')
const LeagueModel = require('../models/leagueModel')


async function createGame(req, res) {
    try {
        const game = await GameModel.create(req.body)
        res.json(game)
    } catch (error) {
        console.log(error)
    }
}

async function showAllGames(req, res) {
    try {
        const games = await GameModel.find(req.body, {__v: 0})
        res.json(games)
    } catch (error) {
        console.log(error)
    }
} 

async function showGame(req, res) {
    try {
        const game = await GameModel.findById(req.params.gameId, {__v: 0})
        res.json(game)
    } catch (error) {
        console.log(error)
    }
}

async function updateGame(req, res) {
    try {
        const modGame = await GameModel.findByIdAndUpdate(req.params.gameId, req.body, {new: true})
        res.json(modGame)
    } catch (error) {
        console.log(error)
    }
}

async function deleteGame(req, res) {
    try {
        const delGame = await GameModel.findByIdAndDelete(req.params.gameId, req.body)
        res.json(delGame)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createGame,
    showAllGames,
    showGame,
    updateGame,
    deleteGame
}