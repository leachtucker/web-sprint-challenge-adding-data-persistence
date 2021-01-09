
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'Notepad App', project_description: 'Allows users to quickly jot down ideas.', project_completed: false },
        { project_name: 'Inspo App', project_description: 'Shows users randomly chosen pictures in order to inspire their creative-minds.', project_completed: false },
        { project_name: 'Screenshot Collector App', project_description: 'Screenshots are typically taken to remind us about things or details. This app allows users to upload their screenshots with additional information such as dates, notes, etc.', project_completed: true }
      ]);
    });
};
