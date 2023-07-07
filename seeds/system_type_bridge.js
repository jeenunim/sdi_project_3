/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('system_type_bridge').del()
  await knex('system_type_bridge').insert([
    {id: 1, weapon_system_id: 1, weapon_type_id: 2}
  ]);
};
