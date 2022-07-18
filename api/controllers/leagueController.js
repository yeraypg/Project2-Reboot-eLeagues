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
        const leagues = await LeagueModel.find(req.body, { organizer: 0}).populate('teams', ['name'])
        .populate('game')
        res.json(leagues)
    } catch (error) {
        console.log(error)
    }
}

async function showLeagueById(req, res) {
    try {
        const league = await LeagueModel.findById(req.params.id).populate('teams', ['name'])
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
        const deletedLeague = await LeagueModel.findById(req.params.id)
        for (elem of deletedLeague.teams) {
            team = await TeamModel.findById(elem)
            index = team.leagues.indexOf(req.params.id)
            team.leagues.splice(index, 1)
            await TeamModel.findByIdAndUpdate(elem, team)
        }
        await LeagueModel.findByIdAndDelete(req.params.id)
        res.json(deletedLeague)
    } catch (error) {
        console.log(error)
    }
}

async function addLeagueTeam(req, res) {
    try {
        const league = await LeagueModel.findById(req.params.id)
        if (league.teams.includes(req.body.teams)) { 
            res.json("This team is already in this league") 
            return}
        league.teams.push(req.body.teams)        
        const updatedLeague = await LeagueModel.findByIdAndUpdate(req.params.id, league, { new: true })
        const team = await TeamModel.findById(req.body.teams)
        team.leagues.push(req.params.id)
        await TeamModel.findByIdAndUpdate(req.body.teams, team)
        res.json(updatedLeague)
    } catch (error) {
        console.log(error)
    }
}

async function deleteLeagueTeam(req, res) {
    try {
        const league = await LeagueModel.findById(req.params.id)
        indexLeague = league.teams.indexOf(req.params.id)
        league.teams.splice(indexLeague, 1)
        await LeagueModel.findByIdAndUpdate(req.params.id, league)
        const team = await TeamModel.findById(req.body.teams)
        indexTeam = team.leagues.indexOf(req.params.id)
        team.leagues.splice(indexTeam, 1)
        await TeamModel.findByIdAndUpdate(req.body.teams, team)        
        res.json(league)
    } catch (error) {
        console.log(error)
    }
}

async function addWinnerTrophy(req, res) {
    try {        
        const league = await LeagueModel.findById(req.params.id)
        if (league.status == 'close') { 
            res.json("This league is already closed") 
            return}
        const team = await TeamModel.findById(req.body.team)        
        for (elem of team.players){
            const player = await UserModel.findById(elem._id)
            player.trophies.push(league.trophy)
            await UserModel.findByIdAndUpdate(player.id, player)
        }
        league.status = "close"
        await LeagueModel.findByIdAndUpdate(league.id, league, { new: true })
        res.json(league)

    } catch (error) {
        console.log(error)
    }
}
module.exports = { createLeague, showAllLeagues, showLeagueById, updateLeague, deleteLeague, addLeagueTeam, deleteLeagueTeam, addWinnerTrophy }