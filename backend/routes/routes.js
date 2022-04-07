const express = require('express')
const router = express.Router()
const {Post, Comment} = require('../schemas/schema')

router.post('/createPost', (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    text: req.body.text
  })
  newPost.save()
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
})


router.get('/getPosts', (req, res) => {
  Post.find().populate('comments').exec((error, posts) => res.json(posts))
})


router.post('/updatePost', (req, res) => {                           // {postId, text, likes}
  const post = Post.findOne({_id: req.body.postId})
  post.text = req.body.text
  post.likes = req.body.likes
  post.save()
  .then(data => {
    res.send(200)
  })
  .catch(error => {
    res.json(error)
  })
})


router.post('/deletePost', (req, res) => {                            // {postId}
  Post.deleteOne({ _id: req.body.postId })
  .then(data => {
    res.send(200)
  })
  .catch(error => {
    res.json(error)
  })
})


router.post('/createComment', async (req, res) => {                       // {text, name, postId}
  const newComment = new Comment({
    name: req.body.name,
    text: req.body.text,
  })
  const post = Post.findOne({_id: req.body.postId})
  post.comments = [...post.comments, newComment._id]
  post.save()
  newComment.save()
  .then(data => {
    res.send(200, data)
  })
  .catch(error => {
    res.json(error)
  })
})


router.post('/updateComment', (req, res) => {                       // {text, commentId, likes}
  const comment = Post.findOne({_id: req.body.postId})
  comment.text = req.body.text
  comment.likes = req.body.likes
  comment.save()
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
})


router.post('/deleteComment', (req, res) => {                       // {commentId}
  Comment.deleteOne({ _id: req.body.commentId })
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
})


// router.get('/getComments', (req, res) => {
//   Comment.find().exec((error, comments) => res.json(comments))
// })


module.exports = router
