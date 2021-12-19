// using Employee constructor 
const Employee = require('../lib/Employee');

//Create employee object
Text('create a employee objects', () => {
    const employee = new Employee(Alvaro, 50, 'alvaro.acmcalvo@yahoo.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

})
