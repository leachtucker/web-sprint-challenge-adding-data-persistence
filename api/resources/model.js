const db = require('../../data/dbConfig');

async function getResources() {
    return await db('resources');
}

async function insertResource(resource) {
    const [ newResourceId ] = await db('resources').insert(resource);

    if (!newResourceId) {
        Promise.resolve(null);
    }

    return Promise.resolve({
        id: newResourceId,
        ...resource
    });
}

module.exports = {
    getResources,
    insertResource
};