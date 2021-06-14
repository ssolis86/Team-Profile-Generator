// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

let theBoss;
let interns = [];
let engineers = [];

const htmlNav = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
        </head>
        <body>
            <div>
                <nav style="height: 100px;" class="bg-danger text-center text-light fs-2 fw-bold">
                My Team
                </nav>
            </div>
`;

const htmlFooter = `
  </body>
</html>
`;

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
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Enter engineers name: ",
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
          name: "gitHub",
          message: "Enter GitHub username: ",
        },
      ])
      .then((userInput) => {
        const engineer = new Engineer(
          userInput.engineerName,
          userInput.employeeId,
          userInput.email,
          userInput.gitHub
        );
        engineers.push(engineer);
        this.anotherEmp();
      });
  };

  finishedTeam = () => {
    let m = this.managerCard();
    let i = this.internCard();
    let e = this.engineerCard();

    let HTML = htmlNav + m + i + e + htmlFooter;
    fs.writeFile("GeneratedHTML_File.html", HTML, (error) => {
      if (error) {
        throw error;
      }
    });
  };

  internCard() {
    console.log("internCard");
    let internArray = [];
    var i;
    for (i = 0; i < interns.length; i++) {
      let internC = ` 
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
              <div class="card-header">
              Name: ${interns[i].name}
              </div>
                <div class="card-body">
                  <h5 class="card-title">Intern</h5>
                    <p class="card-text">
                    Intern ID: ${interns[i].id} 
                    <br>
                    <a style="color:white" href="mailto:${interns[i].email}?subject=Subject&body=message%20goes%20here">${interns[i].email}</a>
                    <br>
                    School: ${interns[i].school}
                    </p>
                </div>
              </div>
            </div>
          </div>    
        `;
      internArray.push(internC);
    }
    let iString = "";
    var j;
    for (j = 0; j < internArray.length; j++) {
      iString = iString + internArray[j];
    }
    return iString;
  }

  engineerCard() {
    let engineerArray = [];
    var i;
    for (i = 0; i < engineers.length; i++) {
      let engineerC = ` 
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
              <div class="card-header">
              Name: ${engineers[i].name}
              </div>
                <div class="card-body">
                  <h5 class="card-title">Engineer</h5>
                    <p class="card-text">
                    Employee ID: ${engineers[i].id} 
                    <br>
                    <a style="color:white" href="mailto:${engineers[i].email}?subject=Subject&body=message%20goes%20here">${engineers[i].email}</a>
                    <br>
                    Github Name: ${engineers[i].github}
                    </p>
                </div>
              </div>
            </div>
          </div>    
        `;
      engineerArray.push(engineerC);
    }
    let eString = "";
    var j;
    for (j = 0; j < engineerArray.length; j++) {
      eString = eString + engineerArray[j];
    }
    return eString;
  }

  managerCard() {
    let theBigCheese = ` 
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">
            Name: ${theBoss.name}
            </div>
              <div class="card-body">
                <h5 class="card-title">Manager</h5>
                  <p class="card-text">
                  Employee ID: ${theBoss.id} 
                  <br>
                  <a style="color:white" href="mailto:${theBoss.email}?subject=Subject&body=message%20goes%20here">${theBoss.email}</a>
                  <br>
                  Office Number: ${theBoss.officeNumber}
                  </p>
              </div>
          </div>
        </div>
      </div>  
    `;
    return theBigCheese;
  }
}

module.exports = Run;
