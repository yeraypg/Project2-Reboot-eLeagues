const TeamModel = require('../models/teamModel')

async function createTeam(req, res) {
    try {
        const team = await TeamModel.create(req.body)
        res.json(team)
    } catch (error) {
        console.log(error)
    }
}

async function showAllTeams(req, res) {
    try {
        const allTeams = await TeamModel.find(req.body)
        res.json(allTeams)
    } catch (error) {
        console.log(error)
    }
}

async function showTeam(req, res) {
    try {
        const team = await TeamModel.findById(req.params.teamId)
        res.json(team)
    } catch (error) {
        console.log(error)
    }
}

async function updateUserTeam(req, res) {
    try {
        const userTeam = await TeamModel.findOneAndUpdate(req.body, {new: true})
        res.json(userTeam)
    } catch (error) {
        console.log(error)
    }
}

async function updateTeamId(req, res) {
    try {
        const updTeam = await TeamModel.findByIdAndUpdate(req.params.teamId, req.body, {new: true})
        res.json(updTeam)
    } catch (error) {
        console.log(error)
    }
}

async function deleteOwnTeam(req, res) {
    try {
        const deleTeam = await TeamModel.findOneAndDelete()
        res.json(deleTeam)
    } catch (error) {
        console.log(error)
    }
}

async function deleteTeamId(req, res) {
    try {
        const delTeamId = await TeamModel.findByIdAndDelete(req.params.teamId)
        res.json(delTeamId)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createTeam,
    showAllTeams,
    showTeam,
    updateUserTeam,
    updateTeamId,
    deleteOwnTeam,
    deleteTeamId
}