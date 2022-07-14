const TeamModel = require('../models/teamModel')
const UserModel = require('../models/userModel')

async function createTeam(req, res) {
    try {
        req.body.leader = res.locals.user.id
        req.body.players = [res.locals.user.id]
        const team = await TeamModel.create(req.body)   
        await UserModel.findByIdAndUpdate(res.locals.user.id, {rol: 'TeamLeader', team: team.id})         
        res.json(team)
    } catch (error) {
        console.log(error)
    }
}

async function showAllTeams(req, res) {
    try {
        const allTeams = await TeamModel.find(req.body, {_id: 0, leagues: 0, __v: 0})
        .populate('players', ['name', 'nick'])
        .populate('leader', ['name', 'nick'])
        res.json(allTeams)
    } catch (error) {
        console.log(error)
    }
}

async function showTeam(req, res) {
    try {
        const team = await TeamModel.findById(res.locals.user.team, {_id: 0, leagues: 0, __v: 0})
        .populate('leader', ['name', 'nick'])
        .populate('players', ['name', 'nick'])
        res.json(team)
    } catch (error) {
        console.log(error)
    }
}

async function updateUserTeam(req, res) {
    try {
        const userTeam = await TeamModel.findOneAndUpdate(res.locals.user.team, req.body, {new: true})
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

async function addPlayer(req, res) {
    try {
        const team = await TeamModel.findById(res.locals.user.team)
        team.players.push(req.body.players)
        await TeamModel.findByIdAndUpdate(res.locals.user.team, team, {new: true})
        await UserModel.findByIdAndUpdate(req.body.players, {team: team.id})
        res.json(team)
    } catch (error) {
        console.log(error)
    }
}

async function deletePlayer(req, res) {
    try {
        const delePlayer = await TeamModel.findById(res.locals.user.team)
        const index = delePlayer.players.indexOf(req.body.players)
        delePlayer.players.splice(index, 1)
        await TeamModel.findByIdAndUpdate(res.locals.user.team, delePlayer, {new: true})
        await UserModel.findByIdAndUpdate(req.body.players, {team: ''})
        res.json(delePlayer)
    } catch (error) {
        console.log(error)
    }
}

async function deleteOwnTeam(req, res) {
    try {
        const deleTeam = await TeamModel.findByIdAndDelete(res.locals.user.team)
        for(const elem of deleTeam.players) {
            await UserModel.findByIdAndUpdate( elem, {rol: 'User', team: ''})
        }
        res.json(deleTeam)
    } catch (error) {
        console.log(error)
    }
}

async function deleteTeamId(req, res) {
    try {
        const delTeamId = await TeamModel.findByIdAndDelete(req.params.teamId)
        for(const elem of delTeamId.players) {
            await UserModel.findByIdAndUpdate( elem, {rol: 'User', team: ''})
        }
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
    addPlayer,
    deletePlayer,
    deleteOwnTeam,
    deleteTeamId
}