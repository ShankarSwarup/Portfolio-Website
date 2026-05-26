const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }
));
app.use(express.json());

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

connectDB();

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

const Message = require('./models/Message');

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: 'Please provide name, email, and message.' });
        }
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        return res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error saving message:', error);
        return res.status(500).json({ success: false, error: 'Failed to send message.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
