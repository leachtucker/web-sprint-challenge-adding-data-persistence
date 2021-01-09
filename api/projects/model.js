const db = require('../../data/dbConfig');

async function getProjects() {
    return await db('projects');
}

async function insertProject(project) {
    return await db('projects').insert(project);
}

module.exports = {
    getProjects,
    insertProject
}