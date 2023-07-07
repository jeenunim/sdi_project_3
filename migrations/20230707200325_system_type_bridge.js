/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('system_type_bridge', table => {
        table.increments(); //the id -> primary key
        table.integer('weapon_system_id');
        table.foreign('weapon_system_id').references(`weapon_system.id`);

        table.integer('weapon_type_id');
        table.foreign('weapon_type_id').references(`weapon_type.id`);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    //we will rollback table and foreign keys
    return knex.schema.alterTable('system_type_bridge', table => {
        table.dropForeign('weapon_system_id');
        table.dropForeign('weapon_type_id');
    }) //then we drop table itself
        .then(function () {
            return knex.schema.dropTableIfExists('system_type_bridge');
        });
};
