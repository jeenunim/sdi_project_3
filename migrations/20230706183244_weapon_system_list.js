/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('weapon_system', table => {
    table.increments('id');
    table.string('name');
    table.string('details');
    table.integer('weapon_type_id');
    table.foreign('weapon_type_id').references('weapon_type.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  //we will rollback table and foreign keys
  return knex.schema.alterTable('weapon_system', table => {
    table.dropForeign('weapon_type_id')
    }) //then we drop table itself
    .then(function () {
      return knex.schema.dropTableIfExists('weapon_system');
    });
};
