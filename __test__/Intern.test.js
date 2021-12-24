const Intern = require('../lib/Intern')

test('Intern Object Created', () => {
    const intern = new Intern ('Alejandra', 48, 'alejandra.argenal@yahoo.com', 'ale0101');
    expect(Intern.github).toEqual(expect.any(String))
  });

test('Check College from getCollege', () => {
    const Intern = new Intern ('Alejandra', 48, 'alejandra.argenal@yahoo.com', 'ale0101');
    expect(Intern.getCollege()).toEqual(expect.stringContaining(Intern.college.toString()));
  });

  test('Get a role from employee', () => {
    const intern = new intern ('Alejandra', 48, 'alejandra.argenal@yahoo.com', 'ale0101');
    expect(intern.getRole()).toEqual("intern");
  });