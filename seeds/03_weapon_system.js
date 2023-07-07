/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('weapon_system').del()
  await knex('weapon_system').insert([
    {id: 1, name: 'HIMARs', details: 'Medium range rocket artillery. Effective against armor, structures, and personnel'}
  ]);
};
