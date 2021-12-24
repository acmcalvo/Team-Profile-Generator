const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, college) {
    super(name, id, email);
    this.college = college;
  }
  getCollege() {
    return this.college;
  }
  // override employee role to Intern
  getRole() {
    return "Intern";
  }
}

// to be exported
module.exports = Intern;
