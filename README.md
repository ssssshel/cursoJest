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

## 2. TRUTHNESS TESTING
```javascript
// expect(n).toBe() matches only when second argument is equal than first
// expect(n).toEqual() matches only when second argument is equal than first
// expect(n).toBeNull() matches only null
// expect(n).toBeUndefined() matches only undefined
// expect(n).toBeDefined() matches only defined
// expect(n).toBeTruthy() matches anything that an if statement treats as true
// expect(n).toBeFalsy() matches anything that an if statement treats as false
```

## 3. NUMBERS TESTING

```javascript
// expect(n).toBeGreaterThan(number) matches only greater numbers
// expect(n).toBeGreaterThanOrEqual(number) matches only greater or equal numbers
// expect(n).toBeLessThan(number) matches only lesser numbers
// expect(n).toBeLessThanOrEqual(number) matches only lesser or equal numbers 
// expect(n).toBeCloseTo(number) matches only when second argument is equal than first (floating point numbers)

```

## 4. STRINGS TESTING

```javascript
// expect(string).toMatch(another_string); returns true if the argument matches the second value
```

## 5. ARRAY TESTING

```javascript
// expect(array).toContain('element') matches only when array contains second argument
// expect(array).toHaveLength(number) matches only when array's length is equal at second parameter
```

## 6. CALLBACKS TESTING
