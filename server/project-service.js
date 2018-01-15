const Project = require('./project-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
  const docquery = Project.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, name } = req.body;

  const project = new Project({ id, name });
  project
    .save()
    .then(() => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create };
