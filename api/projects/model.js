const db = require('../../data/dbConfig');

async function findProject(id) {
    return await db('projects').where({ project_id: id });
}

async function getProjects() {
    return await db('projects');
}

async function insertProject(project) {
    const [ newProjectId ] = await db('projects').insert(project);

    if (!newProjectId) {
        return Promise.resolve(null);
    }

    const [ newProject ] = await findProject(newProjectId);

    return Promise.resolve(newProject);
}

module.exports = {
    findProject,
    getProjects,
    insertProject
}