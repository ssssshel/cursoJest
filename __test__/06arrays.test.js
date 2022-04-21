const {carList, transportList} = require('../src/arrays')

describe('Verificando los autos existentes', () => {
  test('Que el arreglo no sea null', () => {
    expect(carList()).not.toBeNull();
  });

  // toContain matches only when array contains second argument
  test('Verificamos si contiene un Volkswagen', () => {
    expect(carList()).toContain('BMW');
  });

  // toHaveLength matches only when array's length is equal at second parameter
  test('Comprobar la longitud de un arreglo', () => {
    expect(carList()).toHaveLength(4);
  });
  
});

describe('Verificando los medios de transporte', () => {
  test('que el arreglo no sea null', () => {
    expect(transportList()).not.toBeNull();
  });
});