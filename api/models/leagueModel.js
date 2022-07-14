const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: [true, 'Name is required'],
  },
  teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'team'
  }],
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  trophy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'trophy',
    //require: [true, 'Trophy is required']
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'game',
    //require: [true, 'Game is required']
  },
  status: {
    type: String,
    enum: ['Open', 'Close'],
    default: 'Open'
  }
})

const LeagueModel = mongoose.model('league', leagueSchema)

module.exports = LeagueModel