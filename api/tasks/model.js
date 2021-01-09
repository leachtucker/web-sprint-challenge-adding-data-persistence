const db = require('../../data/dbConfig');

async function getTask(id) {
    return await db('tasks').where({ task_id: id });
}

async function getTasks() {
    return await db('tasks');
}

async function insertTask(task) {
    const [ newTaskId ] = await db('tasks').insert(task);

    if (!newTaskId) {
        return Promise.resolve(null);
    }

    const [ newTask ] = await getTask(newTaskId);

    return Promise.resolve(newTask);
}

module.exports = {
    getTask,
    getTasks,
    insertTask
}