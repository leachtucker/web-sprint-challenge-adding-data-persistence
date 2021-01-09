const db = require('../../data/dbConfig');

async function getTasks() {
    return await db('tasks');
}

async function insertTask(task) {
    return await db('tasks').insert(task);
}

module.exports = {
    getTasks,
    insertTask
}