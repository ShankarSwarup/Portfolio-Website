const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Skill = require('./models/Skill');
const Experience = require('./models/Experience');
const Project = require('./models/Project');

dotenv.config();

const skillsData = [
    { name: 'JavaScript', category: 'Languages', proficiency: 95 },
    { name: 'TypeScript', category: 'Languages', proficiency: 90 },
    { name: 'Python', category: 'Languages', proficiency: 85 },
    { name: 'C++', category: 'Languages', proficiency: 80 },
    { name: 'Node.js', category: 'Frameworks & Libraries', proficiency: 95 },
    { name: 'FastAPI', category: 'Frameworks & Libraries', proficiency: 85 },
    { name: 'Express.js', category: 'Frameworks & Libraries', proficiency: 95 },
    { name: 'Angular', category: 'Frameworks & Libraries', proficiency: 80 },
    { name: 'React', category: 'Frameworks & Libraries', proficiency: 90 },
    { name: 'React Native', category: 'Frameworks & Libraries', proficiency: 85 },
    { name: 'REST APIs', category: 'Backend', proficiency: 95 },
    { name: 'MongoDB', category: 'Databases', proficiency: 90 },
    { name: 'AWS Lambda', category: 'Cloud & DevOps', proficiency: 85 },
    { name: 'Docker', category: 'Cloud & DevOps', proficiency: 80 }
];

const experienceData = [
    {
        company: 'Inncircles Technologies',
        role: 'Senior Software Engineer | MEAN/MERN Stack & AWS',
        location: 'Hyderabad, India',
        startDate: 'Aug 2025',
        endDate: 'Present',
        responsibilities: [
            'Migrated scheduled workloads to AWS Lambda and EventBridge, enabling an event-driven architecture and cutting infrastructure costs by 20%.',
            'Established CI/CD pipelines using GitHub Actions to automate build, test, and release processes, reducing release cycle time by 40%.',
            'Introduced collaboration features including mentions, threaded replies, and file sharing, reducing support turnaround time by 30%.'
        ]
    },
    {
        company: 'Inncircles Technologies',
        role: 'Software Engineer | MEAN/MERN Stack',
        location: 'Hyderabad, India',
        startDate: 'Sep 2023',
        endDate: 'Jul 2025',
        responsibilities: [
            'Architected a billing and invoicing system spanning multiple pricing models, processing 1,000+ orders per month with 99.9% transaction reliability.',
            'Engineered a multi-level quantity tracking module adopted by 10+ project managers, cutting allocation errors by 30% across projects.',
            'Hardened and maintained 100+ REST API endpoints with validation, logging, and error handling, reducing failure rates from 4% to below 1%.'
        ]
    },
    {
        company: 'Inncircles Technologies',
        role: 'Software Engineer Intern | MEAN/MERN Stack',
        location: 'Hyderabad, India',
        startDate: 'Mar 2023',
        endDate: 'Aug 2023',
        responsibilities: [
            'Resolved memory leaks and inefficient event handling in a React Native application, reducing crashes by 20%.',
            'Integrated Expo Camera into the mobile app and built a custom camera screen with zoom and pan gesture support, improving user engagement by 18%.'
        ]
    }
];

const projectData = [
    {
        title: 'Medical Platform',
        description: 'Multi-tenant RBAC medical platform with 6 user roles, 22 API endpoints, and 6 role-specific dashboards covering prescriptions, pharmacy, lab scans, and appointments.',
        technologies: ['FastAPI', 'MongoDB', 'React', 'JWT', 'AWS'],
        githubLink: '',
        liveLink: '',
        highlights: [
            'Developed async FastAPI server-side layer powered by Motor (MongoDB) and JWT/OAuth2 auth, enforcing RBAC via require_role() across 22 secured routes.',
            'Shipped a multi-step appointment booking flow and EHR export, reducing patient onboarding time by 50%.',
            'Delivered a SuperAdmin analytics dashboard tracking metrics across 7 MongoDB collections, giving 6 hospital admins organisation-wide operational visibility.'
        ]
    },
    {
        title: 'Student Results Management System',
        description: 'Academic platform with role-based access control, supporting 500+ users; implemented secure authentication, REST APIs, and reporting workflows.',
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'React', 'JWT'],
        githubLink: 'https://github.com/ShankarSwarup/StudentResults',
        liveLink: '',
        highlights: []
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio');
        console.log('MongoDB connected.');

        // Clear existing data
        await Skill.deleteMany({});
        await Experience.deleteMany({});
        await Project.deleteMany({});

        // Seed data
        await Skill.insertMany(skillsData);
        await Experience.insertMany(experienceData);
        await Project.insertMany(projectData);

        console.log('Database seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();
