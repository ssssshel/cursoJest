// expect(n).toBe(a) matches only when second argument is equal than first
// expect(n).toEqual(a) matches only when second argument is equal than first
// expect(n).toBeNull() matches only null
// expect(n).toBeUndefined() matches only undefined
// expect(n).toBeDefined() matches only defined
// expect(n).toBeTruthy() matches anything that an if statement treats as true
// expect(n).toBeFalsy() matches anything that an if statement treats as false

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