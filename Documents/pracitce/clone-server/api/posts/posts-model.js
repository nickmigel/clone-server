const db = require('../../data/dbConfig')

module.exports = {
    addPost,
    getFeed
}

function addPost(body, id) {
    db('posts').insert({ body, user_id: id })
}

function getFeed(id) {
    //to do create joining table for followed and following
}