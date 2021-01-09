const db = require('../../data/dbConfig');

async function getProjects() {
    return await db('projects');
}

async function insertProject(project) {
    const [ newProjectId ] = await db('projects').insert(project);

    if (!newProjectId) {
        return Promise.resolve(null);
    }

    return Promise.resolve({
        id: newProjectId,
        ...project
    });
}

module.exports = {
    getProjects,
    insertProject
}