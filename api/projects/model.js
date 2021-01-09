const db = require('../../data/dbConfig');

async function getProject(id) {
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

    const [ newProject ] = await getProject(newProjectId);

    return Promise.resolve(newProject);
}

async function getResources(id) {
    return await db('projects_resources as pr')
        .join('resources as r', 'pr.resource_id', 'r.resource_id')
        .where({ project_id: id })
        .select('resource_name', 'resource_description');
}

module.exports = {
    getProject,
    getProjects,
    insertProject,
    getResources
}