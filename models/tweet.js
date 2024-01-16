
const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  NumberofRetweets:{
    type: Number,
    default: 0,
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment', // Assuming 'Comment' is the name of your Comment schema/model
  },
});

const Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = Tweet;