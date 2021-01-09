// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(() => {
            res.status(500).json({ message: "There has been an error with the server." })
        })
})

router.post('/', (req, res) => {
    const taskData = req.body;

    Tasks.insertTask(taskData)
        .then(results => {
            res.status(200).json(results);
        })
        .catch(() => {
            res.status(500).json({ message: "There has been an error with the server." })
        })
})

// Export
module.exports = router;