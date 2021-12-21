// using Employee constructor 
const Employee = require('../lib/Employee');
const employee = new Employee('Alvaro', '50', 'acmcalvo@yahoo.com');

//Create employee object
Text('create a employee objects', () => {
    expect(employee.name).toBel('Alvaro');
    expect(employee.id).toBe('50');
    expect(employee.email).toBe ('acmcalvo@yahoo.com');

});


test('gets employee name', () => {
    const employee = new Employee('Alvaro', '50', 'acmcalvo@yahoo.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


test('gets employee ID', () => {
    const employee = new Employee('Alvaro', '50', 'acmcalvo@yahoo.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});


test('gets employee email', () => {
    const employee = new Employee('Alvaro', '50', 'acmcalvo@yahoo.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});


test('gets role of employee', () => {
    const employee = new Employee('Alvaro', '50', 'acmcalvo@yahoo.com');

    expect(employee.getRole()).toEqual("Employee");
}); 


