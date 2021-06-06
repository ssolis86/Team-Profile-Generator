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
        inquirer
          .prompt({
            name: "role",
            type: "checkbox",
            message: "Do you need an [INTERN] or an [ENGINEER]?",
            choices: ["INTERN",      "ENGINEER"],
          })
          .then((answer) => {
            console.log("hello world");
            switch (answer.action) {
              case "INTERN":
                runIntern();
                break;
              case "ENGINEER":
                runEngineer();
                break;
            }
            // if (answer.role === "INTERN") {
            //   console.log(answer.role);
            //   runIntern();
            // } else if (answer.role === "ENGINEER") {
            //   console.log(answer.role);
            //   runEngineer();
            // }
          });
      });
  }

  const runIntern = () => {
    console.log("it worked");
  }
  // nextStep = () => {
  //   inquirer
  //     .prompt({
  //       name: "role",
  //       type: "checkbox",
  //       message: "Do you need an [INTERN] or an [ENGINEER]?",
  //       choices: ["INTERN", "ENGINEER"],
  //     })
  //     .then((answer) => {
  //       if (answer.role === "INTERN") {
  //         runIntern();
  //       } else if (answer.role === "ENGINEER") {
  //         runEngineer();
  //       }
  //     });
  // };
}

module.exports = Run;
