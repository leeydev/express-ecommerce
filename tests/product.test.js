const request = require('supertest');
const app = require('../src/server');
const mongoose = require('mongoose');

describe('Product API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('GET /api/products should return products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
  });
});
