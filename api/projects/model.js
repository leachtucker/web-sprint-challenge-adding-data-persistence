const db = require('../../data/dbConfig');

async function getProject (id) {
    return await db('projects').where({ project_id: id });
}

async function getProjects () {
    return await db('projects');
}

async function insertProject (project) {
    const [ newProjectId ] = await db('projects').insert(project);

    if (!newProjectId) {
        return Promise.resolve(null);
    }

    const [ newProject ] = await getProject(newProjectId);

    return Promise.resolve(newProject);
}

async function getResources (id) {
    return await db('projects_resources as pr')
        .join('resources as r', 'pr.resource_id', 'r.resource_id')
        .where({ project_id: id })
        .select('resource_name', 'resource_description');
}

async function getTasks (id) {
    return await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .where('t.project_id', id)
        .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name');
}

module.exports = {
    getProject,
    getProjects,
    insertProject,
    getResources,
    getTasks
}