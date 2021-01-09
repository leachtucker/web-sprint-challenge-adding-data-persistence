const express = require('express');

const server = express();

server.use(express.json());

// ROUTERS
const projectsRouter = require('./projects/router');
const resourcesRouter = require('./resources/router');
const tasksRouter = require('./tasks/router');

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;