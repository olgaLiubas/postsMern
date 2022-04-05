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

router.post('/createComment', (req, res) => {
  // const post = Post.find({_id: req.body.postId})
  const newComment = new Comment({
    name: req.body.name,
    text: req.body.text,
    post: req.body.postId
  })
  newComment.save()
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
})

router.get('/getPosts', (req, res) => {
  Post.find({}, null, (error, posts) => res.json(posts))
})

module.exports = router
