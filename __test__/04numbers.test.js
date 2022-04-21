// expect(n).toBeGreaterThan(number) matches only greater numbers
// expect(n).toBeGreaterThanOrEqual(number) matches only greater or equal numbers
// expect(n).toBeLessThan(number) matches only lesser numbers
// expect(n).toBeLessThanOrEqual(number) matches only lesser or equal numbers 
// expect(n).toBeCloseTo(number) matches only when second argument is equal than first (floating point numbers)

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