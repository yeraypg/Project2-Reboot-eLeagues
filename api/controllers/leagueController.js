const LeagueModel = require('../models/leagueModel')
const TeamModel = require('../models/teamModel')
const UserModel = require('../models/userModel')

async function createLeague(req, res) {
    try {
        req.body.organizer = res.locals.user.id        
        const league = await LeagueModel.create(req.body)   
        res.json(league)
    } catch (error) {
        console.log(error)
    }
}

async function showAllLeagues(req, res) {
    try {
        const leagues = await LeagueModel.find()
        res.json(leagues)
    } catch (error) {
        console.log(error)
    }
}

async function showLeagueById(req, res) {
    try {
        const league = await LeagueModel.findById(req.params.id)
        res.json(league)
    } catch (error) {
        console.log(error)
    }
}

async function updateLeague(req, res) {
    try {
        const updatedLeague = await LeagueModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedLeague)
    } catch (error) {
        console.log(error)
    }
}

async function deleteLeague(req, res) {
    try {
        const deletedLeague = await LeagueModel.findByIdAndDelete(req.params.id)
        res.json(deletedLeague)
    } catch (error) {
        console.log(error)
    }
}
module.exports = { createLeague, showAllLeagues, showLeagueById, updateLeague, deleteLeague }