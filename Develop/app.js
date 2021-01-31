const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const colors = require(`colors`);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];
// Write code to use inquirer to gather information about the development team members,
function employeeManagment() {
  function selectEmployee() {
    inquirer
      .prompt([
        {
          type: `list`,
          name: `type`,
          message: `Select an employee to add:`,
          choices: [`Engineer`, `Intern`],
        },
      ])
      .then((answers) => {
        switch (answers.type) {
          case `Engineer`:
            getEngineer();
            break;
          default:
            getIntern();
        }
      });
  }

  const addAnother = [
    {
      type: `confirm`,
      name: `add`,
      message: `Would you like to add another employee?`,
    },
  ];

  function askToAdd() {
    inquirer.prompt(addAnother).then((answers) => {
      if (answers.add) {
        selectEmployee();
      } else {
        displayEmployees();
      }
    });
  }

  const validateEmail = (email) => {
    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (valid) {
      return true;
    }
    return "  **Please enter a valid email**".red;
  };

  function getManager() {
    inquirer
      .prompt([
        {
          type: `text`,
          name: "name",
          message: `Enter Manager's First Name`,
        },
        {
          type: `text`,
          name: `id`,
          message: `Enter Manager's ID number`,
        },
        {
          type: `text`,
          name: `email`,
          message: `Enter Manager's email`,
          validate: validateEmail,
        },
        {
          type: `text`,
          name: `officeNumber`,
          message: `Enter Manager's office number`,
          validate: function (value) {
            var pass = value.match(
              /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
            );
            if (pass) {
              return true;
            }
            return "  **Please enter a valid phone number**".red;
          },
        },
      ])
      .then((answers) => {
        const newManager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        employees.push(newManager);
        askToAdd();
      });
  }

  function getEngineer() {
    inquirer
      .prompt([
        {
          type: `text`,
          name: "name",
          message: `Enter Engineer's First Name`,
        },
        {
          type: `text`,
          name: `id`,
          message: `Enter Engineer's ID number`,
        },
        {
          type: `text`,
          name: `email`,
          message: `Enter Engineer's email`,
          validate: validateEmail,
        },
        {
          type: `text`,
          name: `gitHub`,
          message: `Enter Engineer's gitHub username`,
        },
      ])
      .then((answers) => {
        const newEngineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.gitHub
        );
        employees.push(newEngineer);
        askToAdd();
      });
  }

  function getIntern() {
    inquirer
      .prompt([
        {
          type: `text`,
          name: "name",
          message: `Enter Intern's First Name`,
        },
        {
          type: `text`,
          name: `id`,
          message: `Enter Intern's ID number`,
        },
        {
          type: `text`,
          name: `email`,
          message: `Enter Intern's email`,
          validate: validateEmail,
        },
        {
          type: `text`,
          name: `school`,
          message: `Enter name of Intern's school`,
        },
      ])
      .then((answers) => {
        const newIntern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(newIntern);
        askToAdd();
      });
  }
  console.log(`----------------------------------------\n    Welcome to your team builder!
   \n\tlet's get started!\n\nBegin by adding the manager of the team.
   \n----------------------------------------`);
  getManager();
}

function displayEmployees() {
  fs.writeFileSync(outputPath, render(employees), "utf-8");
  console.log("success!");
}

employeeManagment();

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
