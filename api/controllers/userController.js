const UserModel = require('../models/userModel')

async function createUser(req, res){
    try {
        console.log(req)
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

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
} 