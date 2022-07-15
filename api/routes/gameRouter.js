const router = require('express').Router()

const { 
    checkAuth, 
    checkRolUser, 
    checkRolTeamLeader, 
    checkRolOrganizer 
} = require('../utils')

const {
    createGame,
    showAllGames,
    showGame,
    updateGame,
    deleteGame

} = require('../controllers/gameController')

router
.post('/', checkAuth, checkRolOrganizer, createGame)

.get('/', checkAuth, showAllGames)
.get('/:gameId', checkAuth, showGame)

.put('/:gameId', checkAuth, checkRolOrganizer, updateGame)

.delete('/:gameId', checkAuth, checkRolOrganizer, deleteGame)

module.exports = router