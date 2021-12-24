const Manager = require ('../lib/Manager');

test('Manager Object Created', () => {
    const manager = new Manager ('Alejandra', 48, 'alejandra.argenal@yahoo.com', 73);
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  test('Get a role from employee', () => {
    const manager = new Manager ('Alejandra', 48, 'alejandra.argenal@yahoo.com');
    expect(manager.getRole()).toEqual("Manager");
  });