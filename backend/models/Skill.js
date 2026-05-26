const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Languages', 'Frameworks & Libraries', 'Backend', 'Databases', 'Cloud & DevOps', 'Tools & Integrations', 'Practices']
    },
    proficiency: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    }
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
