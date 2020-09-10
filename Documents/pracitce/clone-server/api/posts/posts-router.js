const router = require('express').Router()

const db = require('./posts-model')

router.post('/posts', (req, res) => {
    db.addPost(req.body.message, req.id)
        .then(() => {
            res.status(201).json({ message: "succesfully created" })
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

router.get('/posts', (req, res) => {
    db.getFeed(req.user_id)
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})


module.exports = router