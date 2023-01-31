

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
    name: 'toc',
    message: "Include table of contents?",
    default: ""
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
    type: 'input',
    name: 'license',
    message: "Choose your license, if any",
    choices: ['MIT','Apache','Artistic','none'],
    default: 'none'
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
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(markdownData => {
        console.log(markdownData);
        return markdownData
    })
}



// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})