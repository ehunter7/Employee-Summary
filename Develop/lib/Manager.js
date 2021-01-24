// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require(`./Employee`);

class Manager extends Employee {
  constructor(pName, pID, pEmail, pOffice_Number) {
    super(pName, pID, pEmail);
    this.officeNumber = pOffice_Number;
  }
  getRole() {
    return `Manager`;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
