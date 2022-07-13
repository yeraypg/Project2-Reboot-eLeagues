const router = require('express').Router()
const user = require('./userRouter')
const team = require('./teamRouter')

router.use('/user', user)
router.use('/team', team)



module.exports = router