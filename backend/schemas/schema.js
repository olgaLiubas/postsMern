const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  date:{
    type: Date,
    default: Date.now
  },
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

const CommmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  date:{
    type: Date,
    default: Date.now
  },
  post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
})

const Post = mongoose.model('Post', PostSchema)
const Comment = mongoose.model('Comment', CommmentSchema)

module.exports = {
  Post: Post, 
  Comment: Comment
}
