const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.officeNumber = office;
  }
  // override employee role to Intern
  getRole() {
    return "Manager";
  }
  getofficeNumber() {
    return this.officeNumber;
  }
}

// to be exported
module.exports = Manager;
