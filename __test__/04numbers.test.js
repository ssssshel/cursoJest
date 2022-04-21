// toBeGreaterThan matches only greater numbers
// toBeGreaterThanOrEqual matches only greater or equal numbers
// toBeLessThan matches only lesser numbers
// toBeLessThanOrEqual matches only lesser or equal numbers 
// toBe matches only when second argument is equal than first
// toBeCloseTo matches only when second argument is equal than first (floating point numbers)
// toEqual matches only when second argument is equal than first

test('2 + 2 = 4', () => {
  const value = 2 + 2
  
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(4.00001);
  expect(value).toBeLessThanOrEqual(4);

  expect(value).toBe(4);
  expect(value).toEqual(4);

});

test('adding floating point number', () => {
  const value = 0.1 + 0.2

  expect(value).toBeCloseTo(0.3);
});