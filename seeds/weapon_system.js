/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('weapon_system').del()
  await knex('weapon_system').insert([
    {id: 1, name: 'HIMARs', weapon_type_id: 2}
  ]);
};
