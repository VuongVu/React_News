const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Define User's Schema
 */
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
