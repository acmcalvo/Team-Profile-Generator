const Employee = require('../lib/Employee');

test('Create Employee', () => {
  const emp = new Employee();
  expect(typeof(emp)).toBe('object');
});

test('Can set name via constructor arguments', () => {
  const name = 'Ale';
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test('Can set id via constructor argument', () => {
  const testValue = 100;
  const emp = new Employee('Esteban', testValue);
  expect(emp.id).toBe(testValue);
});

test('Can set email via constructor argument', () => {
  const testValue = 'test@test.com';
  const emp = new Employee('Esteban', 1, testValue);
  expect(emp.email).toBe(testValue);
});

test('get name from getName()', () => {
  const testValue = 'Ale';
  const emp = new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test('get id from  getId()', () => {
  const testValue = 100;
  const emp = new Employee('Esteban', testValue);
  expect(emp.getId()).toBe(testValue);
});

test('get email via getEmail()', () => {
  const testValue = 'test@test.com';
  const emp = new Employee('Esteban', 2, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test('getRole() should return \'Employee\'', () => {
  const testValue = 'Employee';
  const emp = new Employee('Ale', 1, 'test@test.com');
  expect(emp.getRole()).toBe(testValue);
});
