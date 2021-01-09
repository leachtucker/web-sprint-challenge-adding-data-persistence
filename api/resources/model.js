const db = require('../../data/dbConfig');

async function getResources() {
    return await db('resources');
}

async function insertResource(resource) {
    return await db('resources').insert(resource);
}

module.exports = {
    getResources,
    insertResource
};