const router = require('express').Router()
const user = require('./userRouter')
const team = require('./teamRouter')
const league = require('./leagueRouter')
const game = require('./gameRouter')

router.use('/user', user)
router.use('/team', team)
router.use('/league', league)
router.use('/game', game)


module.exports = router