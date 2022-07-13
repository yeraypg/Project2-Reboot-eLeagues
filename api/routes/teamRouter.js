const router = require('express').Router()
const { checkAuth, checkRolUser, checkRolTeamLeader, checkRolOrganizer } = require('../utils')

const {
    createTeam,
    showAllTeams,
    showTeam,
    updateUserTeam,
    updateTeamId,
    deleteOwnTeam,
    deleteTeamId,
} = require('../controllers/teamController')

router
.post('/', checkAuth, checkRolUser, createTeam)
.get('/', checkAuth, showAllTeams)
.get('/profile', checkAuth, showTeam)
.put('/', updateUserTeam)
.put('/:teamId', updateTeamId)
.delete('/', deleteOwnTeam)
.delete('/:teamId', deleteTeamId)

module.exports = router