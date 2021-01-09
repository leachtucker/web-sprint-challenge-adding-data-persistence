const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(() => {
            res.status(500).json({ message: "There has been an error with the server." });
        })
})

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.insertProject(projectData)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(() => {
            res.status(500).json({ message: "There has been an error with the server." })
        })
})

router.get('/:id/resources', (req, res) => {
    const { id } = req.params;

    Projects.getResources(id)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(() => {
            res.status(500).json({ message: "There has been an error with the server." })
        });
})

// Export
module.exports = router;