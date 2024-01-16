const mongoose = require('mongoose');

const HashtagSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  
  },
  tweets:[{
    type:mongoose.Schema.Types.ObjectId
  }]
  
});

const Hashtag = mongoose.model('Hashtag', HashtagSchema);

module.exports = Hashtag;