const sum = require('../src/sum');

// describe contiene un bloque o suite de pruebas a realizar
describe('Pruebas para suma', () => {
  // test declara el test a realizar de manera textual
  test('1 + 2 is 3', () => {
    // expect declara la tarea a realizar y toBe el resultado de esa tarea
    expect(sum(1,2)).toBe(3)
  })
  // it cumple con la misma función que test, es su alias
  it('should return 3 with 1 + 2', () => {
    expect(sum(1,2)).toBe(3)
  })

  // test ejemplo 2
  test('1 + (-2) is -1', () => {
    expect(sum(1,-2)).toBe(-1)
  })

  // test ejemplo 3
  test('- 1 + (-3) is -4', () => {
    expect(sum(-1,-3)).toBe(-4)
  })
});
 