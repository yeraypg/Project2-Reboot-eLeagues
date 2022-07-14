const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Name is required'],
  },
  password: {
    type: String,
    require: true,
  },
  nick: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      }
    },    
    unique: true
  },
  age: {
    type: Number,
    min: [14, 'You are very young']
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'team'
  },
  rol: {
    type: String,
    enum: ['Organizer', 'TeamLeader', 'User'],
    default: 'User'
  },
  games: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'game'
  }],
  trophies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'trophy'
  }]
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
