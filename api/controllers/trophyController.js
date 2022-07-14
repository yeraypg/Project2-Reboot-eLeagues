const TrophyModel = require('../models/trophyModel')

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
        const updateTrophy = await TrophyModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updateTrophy)
    } catch (error) {
        console.log(error)
    }
}

async function deleteTrophy(req, res) {
    try {
        const deleteTrophy = await TrophyModel.findByIdAndDelete(req.params.id)
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