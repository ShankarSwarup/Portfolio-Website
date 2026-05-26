const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: [{
        type: String,
        required: true
    }],
    githubLink: {
        type: String
    },
    liveLink: {
        type: String
    },
    image: {
        type: String
    },
    highlights: [{
        type: String
    }]
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
