// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require(`./Employee`);

class Intern extends Employee {
  constructor(pName, pID, pEmail, pSchool) {
    super(pName, pID, pEmail);
    this.school = pSchool;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return `Intern`;
  }
}

module.exports = Intern;
