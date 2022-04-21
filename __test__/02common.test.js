test('2 + 2 = 4', () => {
  expect(2+2).toBe(4);
});

// validación de objetos
test('object validation', () => {
  const data = {username: 'Angel_Arteaga'}
  const data2 = {username: 'Angel'}

  // toEqual matches only equal
  expect(data).toEqual({username: 'Angel_Arteaga'});
});