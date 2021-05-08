// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
let individualRoles = [];

const initiate = () => {
    inquirer.prompt([
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
    .then((function))
};





