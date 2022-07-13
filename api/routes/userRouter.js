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

.get('/', checkAuth, getAllUsers)
.get('/profile', checkAuth, userProfile) //pendiente de agregar identificación de usuario
.get('/:id', checkAuth, getUserById)

.put('/profile', checkAuth, updateUserProfile) //pendiente de agregar identificación de usuario
.put('/:id', checkAuth, updateUserById)

.delete('/profile', checkAuth, deleteUserProfile) //pendiente de agregar identificación de usuario
.delete('/:id', checkAuth, deleteUserById)

module.exports = router