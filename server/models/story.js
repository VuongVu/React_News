const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Define Comment's Schema
 */
const CommentSchema = new Schema({
  user_name: {
    type: String,
    required: false,
    default: 'Anonymous'
  },
  user_avatar: {
    type: String,
    required: false
  },
  date_created: {
    type: Date,
    default: Date.now()
  },
  date_updated: {
    type: Date,
    default: Date.now()
  },
  content: {
    type: String,
    required: true
  },
  up_votes: {
    type: Number
  },
  down_votes: {
    type: Number
  }
});

/**
 * Define Story's Schema
 */
const StorySchema = new Schema({
  author: {
    type: String,
    required: true
  },
  author_avatar: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: Array,
  date_created: {
    type: Date,
    default: Date.now()
  },
  date_updated: {
    type: Date,
    default: Date.now()
  },
  rating: {
    type: Number,
    default: 0
  },
  tags: Array,
  comments: [CommentSchema]
});

module.exports = mongoose.model('Story', StorySchema);
