const UserModel = require('../models/userModel')

async function createUser(req, res){
    try {
        const user = await UserModel.create(req.body)
        res.json(user)
    } catch (error) {
      console.log(error)  
    }
}

module.exports = {
    createUser,
} 