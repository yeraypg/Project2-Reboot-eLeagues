const router = require('express').Router()
const user = require('./userRouter')
const team = require('./teamRouter')
const league = require('./leagueRouter')
const trophy = require('./trophyRouter')
const game = require('./gameRouter')

router.use('/user', user)
router.use('/team', team)
router.use('/league', league)
router.use('/trophy', trophy)
router.use('/game', game)


module.exports = router