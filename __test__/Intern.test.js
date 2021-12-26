const Intern = require('../lib/Intern')

test('Intern Object Created', () => {
    const intern = new Intern('Alejandra', 48, 'alejandra.argenal@yahoo.com', 'ale0101');
    expect(intern.college).toEqual(expect.any(String));
  });

test('Check College from getCollege', () => {
    const intern = new Intern('Alejandra', 48, 'alejandra.argenal@yahoo.com', 'ale0101');
    expect(intern.getCollege()).toEqual(expect.stringContaining(intern.college.toString()));
  });

  test('Get a role from employee', () => {
    const intern = new Intern('Alejandra', 48, 'alejandra.argenal@yahoo.com', 'ale0101');
    expect(intern.getRole()).toEqual("Intern");
  });