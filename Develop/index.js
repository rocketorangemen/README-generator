// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
let badge;
let license;
console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const promptUser = projectData =>  {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                return true;
                } else {
                console.log('You need to enter a project title!');
                return false;
                }
            }
        },
        {
            type:'input',
            name:'description',
            message: 'Please provide a description for your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                return true;
                } else {
                console.log('You need to enter a description for your project!');
                return false;
                }
            }
        },
        {
            type:'input',
            name:'install',
            message: 'Please list the steps required for your project to work.',
            validate: installInput => {
                if (installInput) {
                return true;
                } else {
                console.log('You need to enter the installation instructions!');
                return false;
                }
            }
        },
        {
            type:'input',
            name:'usage',
            message: 'What are the ways this application can be used?',
            validate: usageInput => {
                if (usageInput) {
                return true;
                } else {
                console.log('You need to enter the way or ways this application is meant to be used!');
                return false;
                }
            }
        },
        {
            type:'list',
            name:'license',
            message: 'Please select the license information for this application.',
            choices: [
                "MIT",
                "Apache-2.0",
                "Mozilla",
                "ISC",
                "None"
            ],
            default: "None",
            validate: licenseInput => {
                if (licenseInput) {
                return true;
                } else {
                console.log('You need to enter the license information for this application!');
                return false;
                }
            }
        },
        
        {
            type:'input',
            name:'contribute',
            message: 'Who contributed to the development of this application?',
            validate: contributeInput => {
                if (contributeInput) {
                return true;
                } else {
                console.log('You need to provide the names of contributors to this application!');
                return false;
                }
            }
        },
        {
            type:'input',
            name:'tests',
            message: 'How can test be ran on this application?',
            validate: testsInput => {
                if (testsInput) {
                return true;
                } else {
                console.log('You need to provide instructions on how tests can be ran on this applications!');
                return false;
                }
            }
        },
        {
            type:'input',
            name:'question',
            message: 'What is your github user name in case anyone has a question?',
            validate: questionInput => {
                if (questionInput) {
                return true;
                } else {
                console.log('You need to enter your github user name!');
                return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message: 'What is your email address in case anyone has a question?',
            validate: emailInput => {
                if (emailInput) {
                return true;
                } else {
                console.log('You need to enter your email address!');
                return false;
                }
            }
        }
    ])
    .then (response => {
        var projectData = response;
        init("README.md", generateMarkdown(projectData, badge, license));
    });
}

promptUser();

// TODO: Create a function to initialize app
function init(fileName, projectData) {
    fs.writeFile(fileName, projectData, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Readme Created!")
        }
    })
}