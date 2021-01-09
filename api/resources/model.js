const db = require('../../data/dbConfig');

async function findResource(id) {
    return await db('resources').where({ resource_id: id });
}

async function getResources() {
    return await db('resources');
}

async function insertResource(resource) {
    const [ newResourceId ] = await db('resources').insert(resource);

    if (!newResourceId) {
        Promise.resolve(null);
    }

    const [ newResource ] = await findResource(newResourceId);

    return Promise.resolve(newResource);
}

module.exports = {
    findResource,
    getResources,
    insertResource
};