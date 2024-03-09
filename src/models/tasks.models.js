const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: false,
  },
  dueDate: {
    type: Date,
    require: false,
  },
  dateCreated: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Tasks', tasksSchema);
