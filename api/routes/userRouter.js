const router = require('express').Router()

const { 
    createUser,
    getUserById,
    getAllUsers
} = require('../controllers/userController')

router
.get('/:id', getUserById)
.get('/', getAllUsers)
.post('/', createUser)


module.exports = router