const TrophyModel = require('../models/trophyModel')
const LeagueModel = require('../models/leagueModel')

async function createTrophy(req, res) {
    try {
        const newTrophy = await TrophyModel.create(req.body)
        res.json(newTrophy)
    } catch (error) {
        console.log(error)
    }
}

async function updateTrophy(req, res) {
    try {
        console.log(req.params.id)
        const updateTrophy = await TrophyModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log(updateTrophy)
        res.json(updateTrophy)
    } catch (error) {
        console.log(error)
    }
}

async function deleteTrophy(req, res) {
    try {
        const deleteTrophy = await TrophyModel.findById(req.params.id)
        const allLeagues = await LeagueModel.find()
        for (elem of allLeagues) {
            if (elem.trophy == req.params.id){
                delete elem.trophy               
            await LeagueModel.findByIdAndUpdate(elem.id, result)
            }            
        }
        await TrophyModel.findByIdAndDelete(req.params.id)
        res.json(deleteTrophy)
    } catch (error) {
        console.log(error)
    }
}

async function showAllTrophies(req, res) {
    try {
        const allTrophies = await TrophyModel.find()
        res.json(allTrophies)
    } catch (error) {
        console.log(error)
    }
}

async function showTrophyById(req, res) {
    try {
        const trophy = await TrophyModel.findById(req.params.id)
        res.json(trophy)
    } catch (error) {
        console.log(error)
    }
}


module.exports = { createTrophy, updateTrophy, deleteTrophy, showAllTrophies, showTrophyById }