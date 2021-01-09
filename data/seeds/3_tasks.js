
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_description: 'Code with Swift', task_notes: 'Swift for iOS', task_completed: true, project_id: 1 },
        { task_description: 'Deploy app to iOS app store', task_notes: 'Could take up to two weeks during review process', task_completed: false, project_id: 1 },
        { task_description: 'Market to productivity-focused individuals', task_notes: 'Channels: Instagram, Facebook, Reddit', task_completed: false, project_id: 1 },
      ]);
    });
};
