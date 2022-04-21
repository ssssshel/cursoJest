// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined matches only defined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('null ', () => {
  const n = null;

  expect(n).toBeNull();
  // expect(n).toBeUndefined();
  expect(n).toBeDefined();
});

test('zero', () => {
  const z = 0;

  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  // expect(z).toBeTruthy();
  expect(z).toBeFalsy();
});