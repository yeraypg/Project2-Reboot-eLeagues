const router = require('express').Router()
<<<<<<< HEAD

const { 
    checkAuth, 
    checkRolUser, 
    checkRolTeamLeader, 
    checkRolOrganizer 
} = require('../utils')

const { 
    createTrophy, 
    updateTrophy, 
    deleteTrophy, 
    showAllTrophies, 
    showTrophyById 
} = require('../controllers/trophyController')
=======
const { checkAuth, checkRolUser, checkRolTeamLeader, checkRolOrganizer } = require('../utils')
const { createTrophy, updateTrophy, deleteTrophy, showAllTrophies, showTrophyById, showTrophyImage } = require('../controllers/trophyController')
>>>>>>> af3749f7b6b19b7ea13497f64f489c89ee9a5913

router
    .post('/', checkAuth, checkRolOrganizer, createTrophy)

    .put('/:id', checkAuth, checkRolOrganizer, updateTrophy)

    .delete('/:id', checkAuth, checkRolOrganizer, deleteTrophy)

    .get('/', checkAuth, showAllTrophies)
    .get('/image/:id', checkAuth, showTrophyImage)
    .get('/:id', checkAuth, showTrophyById)
    


module.exports = router