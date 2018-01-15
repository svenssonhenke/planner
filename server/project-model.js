const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: String,
    songList: [{
      name: String
    }]
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
