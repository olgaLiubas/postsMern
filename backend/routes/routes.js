const express = require('express')
const router = express.Router()
const {Post, Comment} = require('../schemas/schema')

router.get('/getPosts', (req, res) => {
  Post.find().populate('comments').exec((error, posts) => res.json(posts))
})

router.post('/createPost', (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    text: req.body.text,
    comments: []
  })
  newPost.save()
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
})

router.put('/updatePost', (req, res) => {
  Post.updateOne({_id: req.body.postId}, {text: req.body.text, likes: req.body.likes})
  .then(data => {
    res.send(200)
  })
  .catch(error => {
    res.json(error)
  })
})


router.post('/deletePost', (req, res) => {
  Post.deleteOne({ _id: req.body.postId })
  .then(data => {
    res.send(200)
  })
  .catch(error => {
    res.json(error)
  })
})


router.post('/createComment', async (req, res) => {
  const newComment = new Comment({
    name: req.body.name,
    text: req.body.text,
  })
  newComment.save()
  Post.findOneAndUpdate({_id: req.body.postId}, {$push: {comments: newComment._id}})
  .then(data => {
    res.send(200, data)
  })
  .catch(error => {
    res.json(error)
  })
})

router.put('/updateComment', (req, res) => {
  Comment.updateOne({_id: req.body.commentId}, {text: req.body.text, likes: req.body.likes})
  .then(data => {
    res.send(200)
  })
  .catch(error => {
    res.json(error)
  })
})


router.post('/deleteComment', (req, res) => {
  Comment.deleteOne({ _id: req.body.commentId })
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
})


module.exports = router
