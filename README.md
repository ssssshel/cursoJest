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

> callback
```javascript

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

function fetchAPI(url, callback){
  var req = new XMLHttpRequest()
  req.open('GET', url, true)
  req.onreadystatechange = (event) => {
    if(req.readyState === 4){
      if(req.status === 200){
        callback(null, JSON.parse(req.responseText))
      }else{
        const err = new Error(`URL inválida ${url}`)
        return callback(err, null)
      }
    }
  }
  req.send()
}

module.exports = fetchAPI
```

>test suite
```javascript

const fetchAPI = require('../src/callback');

test('should return album 2 info', done => {
  const API  = 'https://jsonplaceholder.typicode.com/albums/2'

  function callback(err, data){
    try {
      expect(err).toBeNull();
      expect(data).not.toBeNull();
  
      expect(data.title).toBe('sunt qui excepturi placeat culpa');
  
      done()
    } catch (err) {
      done(err)
    }
  }
  fetchAPI(API, callback)
});
```

## 7. PROMMISES & ASYNC TESTING

>promise
```javascript

const axios = require('axios')

function getData(url){
  return axios.get(url);
}

module.exports = getData
```

>promise test suite
```javascript

const getData = require ('../src/promise');

const API = 'https://jsonplaceholder.typicode.com/users/2'

test('should return info about user with id 2', () => {
  getData(API).then((response) => {
		return expect(response.data.name).toBe('Ervin Howell');
	})});

test('test should pass by a invalid URL', () => {
	expect.assertions(1)
	return getData('dskjdhjshdsha').catch( err => expect(err).not.toBeNull());
});
```

>async test suite 
```javascript
const getData = require('../src/promise')
const API = 'https://jsonplaceholder.typicode.com/users/2'

test('should return information about user with id 2', async () => {
	const response = await getData(API)

	expect(response.data.name).toBe('Ervin Howell');
});

test('test should pass by a invalid URL', async() => {
	expect.assertions(1)
	try {
		await getData('HGSFGHSD')
	} catch(err) {
		expect(err).not.toBeNull();
	}
});
```