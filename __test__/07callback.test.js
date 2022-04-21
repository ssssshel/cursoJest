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