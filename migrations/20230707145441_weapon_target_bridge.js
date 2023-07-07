/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/*
_________|_________
1| sniper|tank
2| sniper|drone
3| person|drone

 */

exports.up = function(knex) {
  return knex.schema.createTable('weapon_target_bridge', table => {
    table.increments(); //the id -> primary key
    table.integer('weapon_system_id');
    table.foreign('weapon_system_id').references(`weapon_system.id`);

    table.integer('target_list_id');
    table.foreign('target_list_id').references(`target_list.id`);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    //we will rollback table and foreign keys
    return knex.schema.alterTable('weapon_target_bridge', table => {
      table.dropForeign('weapon_system_id');
      table.dropForeign('target_list_id');
    }) //then we drop table itself
    .then(function() {
      return knex.schema.dropTableIfExists('weapon_target_bridge');
    });
};
