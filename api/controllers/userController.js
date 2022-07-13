const UserModel = require('../models/userModel')

async function createUser(req, res){
    try {        
        const user = await UserModel.create(req.body)
        res.json(user)
    } catch (error) {
        console.log(error)  
    }
}

async function getUserById(req, res){
    try {
        const user = await UserModel.findById(req.params.id)
        res.json(user)
    } catch (error) {
        console.log(error)
    }
}

async function getAllUsers(req, res){
    try {
        const allUsers = await UserModel.find()
        res.json(allUsers)
    } catch (error) {
        console.log(error)
    }
}

async function userProfile(req, res){
    try {
        res.json('User Profile') //pendiente de agregar identificación de usuario
    } catch (error) {
        console.log(error)
    }
}

async function updateUserById(req, res){
    try {
        const userUpdate = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(userUpdate)
    } catch (error) {
        console.log(error)
    }
}

async function updateUserProfile(req, res){
    try {
        res.json('Update User Profile') //pendiente de agregar identificación de usuario
    } catch (error) {
        console.log(error)
    }
}

async function deleteUserById(req, res){
    try {
        const userDelete = await UserModel.findByIdAndDelete(req.params.id)
        res.json(userDelete)
    } catch (error) {
        console.log(error)
    }
}

async function deleteUserProfile(req, res){ 
    try {
        res.json('Delete User Profile') //pendiente de agregar identificación de usuario
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    userProfile,
    updateUserProfile,
    updateUserById,
    deleteUserProfile,
    deleteUserById
} 