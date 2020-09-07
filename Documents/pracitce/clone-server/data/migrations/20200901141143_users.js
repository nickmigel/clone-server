
exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments("id")
        tbl.string('email').notNullable()
        tbl.string("password").notNullable()
    })
        .createTable('posts', tbl => {
            tbl.increments()
            tbl.string('body').notNullable()
            tbl.integer('user_id')
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('posts')
        .dropTableIfExists('users')
};
