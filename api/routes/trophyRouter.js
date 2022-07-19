const router = require('express').Router()
const { checkAuth, checkRolUser, checkRolTeamLeader, checkRolOrganizer } = require('../utils')
const { createTrophy, updateTrophy, deleteTrophy, showAllTrophies, showTrophyById, showTrophyImage } = require('../controllers/trophyController')

router
    .post('/', checkAuth, checkRolOrganizer, createTrophy)

    .put('/:id', checkAuth, checkRolOrganizer, updateTrophy)

    .delete('/:id', checkAuth, checkRolOrganizer, deleteTrophy)

    .get('/', checkAuth, showAllTrophies)
    .get('/image/:id', checkAuth, showTrophyImage)
    .get('/:id', checkAuth, showTrophyById)
    


module.exports = router