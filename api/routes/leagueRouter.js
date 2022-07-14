const router = require('express').Router()
const { checkAuth, checkRolUser, checkRolTeamLeader, checkRolOrganizer } = require('../utils')
const { createLeague, showAllLeagues, showLeagueById, updateLeague, deleteLeague, addLeagueTeam, deleteLeagueTeam } = require('../controllers/leagueController')

router
    .post('/', checkAuth, checkRolOrganizer, createLeague)

    .get('/', checkAuth, showAllLeagues)
    .get('/:id', checkAuth, showLeagueById)

    .put('/:id', checkAuth, checkRolOrganizer, updateLeague)
    .patch('/addTeam/:id', checkAuth, checkRolOrganizer, addLeagueTeam )
    .patch('/deleteTeam/:id', checkAuth, checkRolOrganizer, deleteLeagueTeam)

    .delete('/:id', checkAuth, checkRolOrganizer, deleteLeague)



module.exports = router