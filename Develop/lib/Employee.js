// TODO: Write code to define and export the Employee class

class Employee {
  constructor(pName, pID, pEmail) {
    this.name = pName;
    this.id = pID;
    this.email = pEmail;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return `Employee`;
  }
}

module.exports = Employee;
