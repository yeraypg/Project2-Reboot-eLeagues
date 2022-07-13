const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')


function checkAuth(req, res, next) {
    try {
      if (!req.headers.token) {
        res.status(403).send(`Token not found`);
      } else {
        jwt.verify(req.headers.token, process.env.SECRET, async (err, token) => {
          if (err) {
            res.status(403).send("Token not valid");
          }
          const user = await UserModel.findOne({ email: token.email })
          res.locals.user = user
          next();
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function checkRolUser(req, res, next) {
    if (res.locals.user.rol !== 'User') {
        return res.send('User not authorized')
    }
    return next();
}

  function checkRolTeamLeader(req, res, next) {
      if (res.locals.user.rol === 'User') {
          return res.send('User not authorized')
      }
      return next();
  }

  function checkRolOrganizer(req, res, next) {
    if (res.locals.user.rol !== 'Organizer') {
        return res.send('User not authorized')
    }
    return next();
}


  
  module.exports = { checkAuth, checkRolUser, checkRolTeamLeader, checkRolOrganizer };