// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./Manager");
// const path = require("path");
// const Employee = require("./lib/Employee");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const Manager = require("./lib/Manager");
let theBoss;
let interns = [];
let engineers = [];

class Run {
  run() {
    this.initiate();
  }

  initiate() {
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
      .then((userInput) => {
        const manager = new Manager(
          userInput.managerName,
          userInput.employeeId,
          userInput.email,
          userInput.officeNumber
        );
        theBoss = manager;
        console.log(theBoss);
      })
      .then(() => {
        this.anotherEmp();
      });
  }

  anotherEmp = () => {
    inquirer
      .prompt({
        name: "role",
        type: "list",
        message: "Do you need an [INTERN] , [ENGINEER] , or [FINISHED]?",
        choices: ["INTERN", "ENGINEER", "FINISHED"],
      })
      .then((answer) => {
        console.log(answer);
        switch (answer.role) {
          case "INTERN":
            this.runIntern();
            break;
          case "ENGINEER":
            this.runEngineer();
            break;
          case "FINISHED":
            this.finishedTeam();
            break;
        }
      });
  };

  runIntern = () => {
    console.log("runIntern");
    this.anotherEmp();
  };

  runEngineer = () => {
    console.log("runEngineer");
    this.anotherEmp();
  };

  finishedTeam = () => {
    console.log("finishedTeam");
  };
}

module.exports = Run;
