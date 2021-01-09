
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'Computer', resource_description: 'Specs: 8gb+ ram and i5+ CPU' },
        { resource_name: 'Internet Access', resource_description: 'Specs: Working internet access' }
      ]);
    });
};
