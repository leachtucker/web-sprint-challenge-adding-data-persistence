
exports.up = function(knex) {
    return knex.schema
        .createTable('projects_resources', table => {
            table.integer('project_id')
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            table.integer('resource_id')
                .notNullable()
                .references('resource_id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects_resources');
};
