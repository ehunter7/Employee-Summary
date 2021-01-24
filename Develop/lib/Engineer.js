// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require(`./Employee`);

class Engineer extends Employee {
  constructor(pName, pID, pEmail, pGitHub) {
    super(pName, pID, pEmail);
    this.github = pGitHub;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return `Engineer`;
  }
}

module.exports = Engineer;
