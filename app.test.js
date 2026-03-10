// app.test.js
const request = require('supertest');
const app = require('./app');

test('GET / should return 200', async () => {
  await request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /text/);
});
