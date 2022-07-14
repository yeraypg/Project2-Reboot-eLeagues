const router = require('express').Router()

const { 
    checkAuth, 
    checkRolUser, 
    checkRolTeamLeader, 
    checkRolOrganizer 
} = require('../utils')

const {
    createTeam,
    showAllTeams,
    showTeam,
    updateUserTeam,
    updateTeamId,
    addPlayer,
    deletePlayer,
    deleteOwnTeam,
    deleteTeamId
} = require('../controllers/teamController')

router
.post('/', checkAuth, checkRolUser, createTeam)

.get('/', checkAuth, showAllTeams)
.get('/profile', checkAuth, showTeam)

.put('/profile', checkAuth, checkRolTeamLeader, updateUserTeam)
.put('/:teamId',checkAuth, checkRolOrganizer, updateTeamId)

.patch('/addplayer', checkAuth, checkRolTeamLeader, addPlayer)
.patch('/deleteplayer', checkAuth, checkRolTeamLeader, deletePlayer)

.delete('/profile', checkAuth, checkRolTeamLeader, deleteOwnTeam)
.delete('/:teamId',checkAuth, checkRolOrganizer, deleteTeamId)

module.exports = router