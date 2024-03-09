const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  dateCreated: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Users', userSchema);
