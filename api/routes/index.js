const router = require('express').Router()
const user = require('./userRouter')
const team = require('./teamRouter')
const league = require('./leagueRouter')
const trophy = require('./trophyRouter')

router.use('/user', user)
router.use('/team', team)
router.use('/league', league)
router.use('/trophy', trophy)


module.exports = router