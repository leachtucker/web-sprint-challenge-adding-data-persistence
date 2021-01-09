const db = require('../../data/dbConfig');

async function getTasks() {
    return await db('tasks');
}

async function insertTask(task) {
    const [ newTaskId ] = await db('tasks').insert(task);

    if (!newTaskId) {
        return Promise.resolve(null);
    }

    return Promise.resolve({
        id: newTaskId,
        ...task
    })
}

module.exports = {
    getTasks,
    insertTask
}