// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter team manager's name: ",
        },
        {
            type: "input",
            name: "employeeId",
            message: "Enter your employee ID:  ",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address: ",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter your office telephone number: ",
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
