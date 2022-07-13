const router = require('express').Router()

const { 
    createUser,
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

.get('/', getAllUsers)
.get('/profile', userProfile) //pendiente de agregar identificación de usuario
.get('/:id', getUserById)

.put('/profile', updateUserProfile) //pendiente de agregar identificación de usuario
.put('/:id', updateUserById)

.delete('/profile', deleteUserProfile) //pendiente de agregar identificación de usuario
.delete('/:id', deleteUserById)

module.exports = router