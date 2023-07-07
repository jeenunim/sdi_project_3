/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('weapon_target_bridge').del()
  await knex('weapon_target_bridge').insert([
    {id: 1, weapon_system_id: 1, target_list_id: 1}
  ]);
};
