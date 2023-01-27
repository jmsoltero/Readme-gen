// TODO: Include packages needed for this application
const inquirer = import('inquirer');
const fs = require('fs');
const getMarkdown = import(generateMarkdown)







// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: "Name of project?",
    default: "Project"
},
    "Project Description?",
    "Installation?",
    "Installation instructions?",
    "Usage?",
    "Usage instructions?",
    "Contributing?",
    "Contributing",
    "License?",
    "License Type"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
