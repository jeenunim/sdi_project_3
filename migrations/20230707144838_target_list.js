/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('target_list', table => {
        table.increments('id');
        table.string('name');
        table.string('details');
        table.integer('weapon_type_id');
        table.foreign('weapon_type_id').references(`weapon_type.id`)
        table.varchar('img_url', 255)
});
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('target_list', table => {
        table.dropForeign('weapon_type_id');
      }) //then we drop table itself
      .then(function() {
        return knex.schema.dropTableIfExists('target_list');
      });
};
