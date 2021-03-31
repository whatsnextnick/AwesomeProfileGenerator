// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getPosition() {
    return "Manager";
    //console.log("Manager");
  }
  getOfficeNumber() {
    return this.officeNumber;
    //console.log(this.officeNumber);
  }
}

module.exports = Manager;
