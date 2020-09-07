const router = require('express').Router()
const bcr = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('./auth-model')


router.post('/register', (req, res) => {
    let { email, password } = req.body

    const hash = bcr.hashSync(password, 10)

    password = hash

    db.add({ email, password })
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/login', (req, res) => {
    let { email, password } = req.body

    db.findBy({ email })
        .first()
        .then(user => {
            if (user && bcr.compare(password, user.password)) {
                const token = generateToken(user)
                res.status(200).json({ message: `welcome back`, payload: token })
            } else {
                res.status(404).json({ message: "user not found" })
            }
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email
    }

    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, 'placeholder', options)
}

module.exports = router