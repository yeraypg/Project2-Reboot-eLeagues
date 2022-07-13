const router = require('express').Router()

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
.post('/', createTeam)
.get('/', showAllTeams)
.get('/:teamId', showTeam)
.put('/', updateUserTeam)
.put('/:teamId', updateTeamId)
.delete('/', deleteOwnTeam)
.delete('/:teamId', deleteTeamId)

module.exports = router