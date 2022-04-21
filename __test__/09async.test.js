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