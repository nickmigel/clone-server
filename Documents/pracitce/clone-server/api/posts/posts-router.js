const router = require('express').Router()

const db = require('./posts-model')

router.post('/posts', (req, res) => {
    db.addPost(req.body.message, req.id)
})


module.exports = router