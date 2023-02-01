

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//import inquirer from 'inquirer';
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')







// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: "Name of project?",
    default: "Project"
},
{
    type: 'input',
    name: 'description',
    message: "Project Description?",
    default: "This is a project description"
},
{
    type: 'input',
    name: 'installation',
    message: "Instructions for installation",
    default: ""
},{
    type: 'input',
    name: 'usage',
    message: "How to use this application",
    default: ""
},
{
    type: 'list',
    name: 'license',
    message: "Choose your license, if any",
    choices: ['mit','unilicense','apache','agpl'],
    default: ''
},
{
    type: 'input',
    name: 'contributing',
    message: "How can users contribute to your project?",
    default: ""
},
{
    type: 'input',
    name: 'tests',
    message: "What tests can be ran in your application?",
    default: ""
},
{
    type: 'input',
    name: 'github',
    message: "What is your github username?",
    default: ""
},
{
    type: 'input',
    name: 'email',
    message: "What is your email",
    default: ""
}
]



// TODO: Create a function to write README file
const writeFile = readmeContent => {
        fs.writeFile('your-gen-readme.md', readmeContent, function (err){
            if (err) throw err; 
                console.log('Your README has been generated')
        });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        return answers
    })
}



// Function call to initialize app
init()
.then(answers => {
    console.log(answers);
    return generateMarkdown(answers);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.catch(err => {
    console.log(err);
})