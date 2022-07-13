const router = require('express').Router()
const { checkAuth, checkRoleUser, checkRoleTeamLeader, checkRoleOrganizer } = require('../utils')

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
.post('/', checkAuth, checkRoleUser, createTeam)
.get('/', checkAuth, checkRoleOrganizer, showAllTeams)
.get('/:teamId', showTeam)
.put('/', updateUserTeam)
.put('/:teamId', updateTeamId)
.delete('/', deleteOwnTeam)
.delete('/:teamId', deleteTeamId)

module.exports = router