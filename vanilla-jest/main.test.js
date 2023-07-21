const sayThis = require('./main');

test('sayThis returns the string passed to it', () => {
  expect(sayThis('hello')).toBe('hello');
});
