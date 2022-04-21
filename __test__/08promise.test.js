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