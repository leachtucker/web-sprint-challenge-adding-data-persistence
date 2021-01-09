const db = require('../../data/dbConfig');

async function getResource (id) {
    return await db('resources').where({ resource_id: id });
}

async function getResources () {
    return await db('resources');
}

async function insertResource (resource) {
    const [ newResourceId ] = await db('resources').insert(resource);

    if (!newResourceId) {
        Promise.resolve(null);
    }

    const [ newResource ] = await getResource(newResourceId);

    return Promise.resolve(newResource);
}

async function getProjects (id) {
    return await db('projects_resources as pr')
        .join('projects as p', 'p.project_id', 'pr.project_id')
        .join('resources as r', 'pr.resource_id', 'r.resource_id')
        .where('pr.resource_id', id)
        .select('p.project_name', 'r.resource_name');
}

module.exports = {
    getResource,
    getResources,
    insertResource,
    getProjects
};