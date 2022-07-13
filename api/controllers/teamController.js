const TeamModel = require('../models/teamModel')
const UserModel = require('../models/userModel')

async function createTeam(req, res) {
    try {
        req.body.leader = res.locals.user.id
        req.body.players = [res.locals.user.id]
        const team = await TeamModel.create(req.body)   
        await UserModel.findByIdAndUpdate(res.locals.user.id, {team: team.id, rol: 'TeamLeader'})         
        res.json(team)
    } catch (error) {
        console.log(error)
    }
}

async function showAllTeams(req, res) {
    try {
        const allTeams = await TeamModel.find()
        res.json(allTeams)
    } catch (error) {
        console.log(error)
    }
}

async function showTeam(req, res) {
    try {
        const team = await TeamModel.findById(res.locals.user.team)
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