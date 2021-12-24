const Engineer = require('../lib/Engineer')

test('Engineer Object Created', () => {
  const engineer = new Engineer ('Alejandra', 48, 'alejandra.argenal@yahoo.com', 'ale0101');
  expect(engineer.github).toEqual(expect.any(String))
});

test('Check Github form getGithub', () => {
  const engineer = new Engineer ('Alejandra', 48, 'alejandra.argenal@yahoo.com', 'ale0101');
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Get a role from employee', () => {
  const engineer = new Engineer ('Alejandra', 48, 'alejandra.argenal@yahoo.com', 'ale0101');
  expect(engineer.getRole()).toEqual('Engineer');
});