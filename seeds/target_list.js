/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('target_list').del()
  await knex('target_list').insert([
    {id: 1, name: 'T-14 Armata', details: 'Vulnerability: Turret, Rear Armor, Tracks', img_url: 'https://pngimg.com/uploads/tank/tank_PNG101037.png'}
  ]);
};
