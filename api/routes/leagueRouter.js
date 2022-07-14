const router = require('express').Router()
const { checkAuth, checkRolUser, checkRolTeamLeader, checkRolOrganizer } = require('../utils')
const { createLeague, showAllLeagues, showLeagueById, updateLeague, deleteLeague } = require('../controllers/leagueController')

router
    .post('/', checkAuth, checkRolOrganizer, createLeague)

    .get('/', checkAuth, showAllLeagues)
    .get('/:id', checkAuth, showLeagueById)

    .put('/:id', checkAuth, checkRolOrganizer, updateLeague)

    .delete('/:id', checkAuth, checkRolOrganizer, deleteLeague)



module.exports = router