const router = require('express').Router()
const user = require('./userRouter')
const team = require('./teamRouter')
const league = require('./leagueRouter')

router.use('/user', user)
router.use('/team', team)
router.use('/league', league)



module.exports = router