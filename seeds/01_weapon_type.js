/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('weapon_type').del()
  await knex('weapon_type').insert([
    {id: 1, target_type: 'anti-air'},
    {id: 2, target_type: 'anti-armor'},
    {id: 3, target_type: 'anti-personnel'},
    {id: 4, target_type: 'anti-structure'}
  ]);
};
