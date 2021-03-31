// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName() {
      return this.name;
      //console.log(this.name);
    }
    getId() {
      return this.id;
      // console.log(this.id);
    }
    getEmail() {
      return this.email;
      //console.log(this.email);
    }
    getPosition() {
      return "Employee";
      console.log("Employee");
    }
  }
  
  module.exports = Employee;