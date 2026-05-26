const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    responsibilities: [{
        type: String,
        required: true
    }]
}, { timestamps: true });

module.exports = mongoose.model('Experience', experienceSchema);
