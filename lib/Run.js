// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

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
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Enter interns name: ",
        },
        {
          type: "input",
          name: "employeeId",
          message: "Enter employee ID:  ",
        },
        {
          type: "input",
          name: "email",
          message: "Enter email address: ",
        },
        {
          type: "input",
          name: "school",
          message: "Enter school name: ",
        },
      ])
      .then((userInput) => {
        const intern = new Intern(
          userInput.internName,
          userInput.employeeId,
          userInput.email,
          userInput.school
        );
        interns.push(intern);
        this.anotherEmp();
      });
  };

  runEngineer = () => {
    console.log("runEngineer");
    this.anotherEmp();
  };

  finishedTeam = () => {
    console.log(interns);
  };
}

module.exports = Run;
