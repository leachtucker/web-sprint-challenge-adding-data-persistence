// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(() => {
            res.status(500).json({ message: "There has been an error with the server." });
        })
})

router.post('/', (req, res) => {
    const resourceData = req.body;

    Resources.insertResource(resourceData)
        .then(results => {
            res.status(200).json(results);
        })
        .catch(() => {
            res.status(500).json({ message: "There has been an error with the server." })
        })
})

// Export
module.exports = router;