const db = require('../../data/dbConfig')

module.exports = {
    add,
    findById,
    getAll,
    findBy
}

function getAll() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users')
        .where({ id })
        .first()
}

async function add(user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}