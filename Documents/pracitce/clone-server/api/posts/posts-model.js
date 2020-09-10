const db = require('../../data/dbConfig')

module.exports = {
    addPost,
    getFeed
}

function addPost(body, id) {
    db('posts').insert({ body, user_id: id })
}

function getFeed(id) {
    return db('users')
        .where({ id })
        .join('following', 'users.id', '=', 'following.user_id')
        .join('posts', 'following.follow_id', '=', 'posts.user_id')
        .select('posts.body')
}