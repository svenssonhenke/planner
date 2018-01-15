const express = require('express');
const router = express.Router();

const projectService = require('../project-service');

router.get('/projects', (req, res) => {
  projectService.get(req, res);
});

router.put('/project', (req, res) => {
  projectService.create(req, res);
});

router.post('/project', (req, res) => {
  projectService.update(req, res);
});

router.delete('/project/:id', (req, res) => {
  projectService.destroy(req, res);
});

module.exports = router;
