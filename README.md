# CURSO JEST
## 1. EJEMPLO BASE DE UNA SUITE DE PRUEBAS


```javascript
// Se importan los archivos a testear
const sum = require('../src/sum');

// describe contiene la suite de pruebas a realizar
describe('Pruebas para suma', () => {
    
  // test contiene un test unitario a realizar
  test('1 + 2 is 3', () => {
      
    // expect declara la tarea a realizar y toBe el resultado de esa tarea
    expect(sum(1,2)).toBe(3)
  })

// it es una alternativa a test, cumplen con la misma función
  it('should return 3 with 1 + 2', () => {
    expect(sum(1,2)).toBe(3)
  }

});

```