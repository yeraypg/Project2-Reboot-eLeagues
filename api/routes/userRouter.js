const router = require('express').Router()
const { checkAuth, checkRolUser, checkRolTeamLeader, checkRolOrganizer } = require('../utils')

const { 
    createUser,
    login,
    getUserById,
    getAllUsers,
    userProfile,
    updateUserProfile,
    updateUserById,
    deleteUserProfile,
    deleteUserById
} = require('../controllers/userController')

router
.post('/', createUser)
.post('/login', login)

.get('/', checkAuth, checkRolOrganizer, getAllUsers)
.get('/profile', checkAuth, userProfile)
.get('/:id', checkAuth, checkRolOrganizer, getUserById)

.put('/profile', checkAuth, updateUserProfile)
.put('/:id', checkAuth, checkRolOrganizer, updateUserById)

.delete('/profile', checkAuth, deleteUserProfile)
.delete('/:id', checkAuth, checkRolOrganizer, deleteUserById)

module.exports = router