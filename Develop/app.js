const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
const selectEmployee = [
  {
    type: `list`,
    name: `type`,
    message: `Select an employee to add:`,
    choices: [`Manager`, `Engineer`, `Intern`],
  },
];

const addAnother = [
  {
    type: `confirm`,
    name: `add`,
    message: `Would you like to add another employee?`,
  },
];

function ask() {
  inquirer.prompt(selectEmployee).then((answers) => {
    switch (answers.type) {
      case `Manager`:
        getManager();
        break;
      case `Engineer`:
        getEngineer();
        break;
      default:
        getIntern();
    }
  });
}

function askToAdd() {
  inquirer.prompt(addAnother).then((answers) => {
    if (answers.add) {
      ask();
    } else {
      /**go to next step*/
    }
  });
}
function getManager() {
  inquirer
    .prompt([
      {
        type: `text`,
        name: "name",
        message: `Enter First Name`,
      },
      {
        type: `text`,
        name: `id`,
        message: `Enter ID number`,
      },
      {
        type: `text`,
        name: `email`,
        message: `Enter an email`,
      },
      {
        type: `text`,
        name: `officeNumber`,
        message: `Enter an office number`,
      },
    ])
    .then((answers) => {
      const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      render(newManager);
      askToAdd();
    });
}
function getEngineer() {
  inquirer
    .prompt([
      {
        type: `text`,
        name: "name",
        message: `Enter First Name`,
      },
      {
        type: `text`,
        name: `id`,
        message: `Enter ID number`,
      },
      {
        type: `text`,
        name: `email`,
        message: `Enter an email`,
      },
      {
        type: `text`,
        name: `gitHub`,
        message: `Enter an office number`,
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.gitHub
      );
      render(newEngineer);
      askToAdd();
    });
}
function getIntern() {
  inquirer
    .prompt([
      {
        type: `text`,
        name: "name",
        message: `Enter First Name`,
      },
      {
        type: `text`,
        name: `id`,
        message: `Enter ID number`,
      },
      {
        type: `text`,
        name: `email`,
        message: `Enter an email`,
      },
      {
        type: `text`,
        name: `school`,
        message: `Enter name of school`,
      },
    ])
    .then((answers) => {
      const newInter = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      render(newInter);
      askToAdd();
    });
}

ask();
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
