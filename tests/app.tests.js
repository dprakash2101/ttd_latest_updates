const request = require('supertest');
const app = require('../app');

const PORT = 9000; // Default to 3000 if TEST_PORT is not provided
const server = app.listen(PORT, () => {
    console.log(`Test server is running on port ${PORT}`);
});

describe('TTD Web Scraper API', () => {
  it('should return data with status 200', async () => {
    const response = await request(server).get('/latest-updates');
    expect(response.status).toBe(200);
  });

  it('should return an array of objects', async () => {
    const response = await request(server).get('/latest-updates');
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toEqual(expect.objectContaining({
      id: expect.any(Number),
      tag: expect.any(String),
      data: expect.any(String),
      publishedAt: expect.any(String),
    }));
  });

  it('should have specific properties in each object', async () => {
    const response = await request(server).get('/latest-updates');
    const firstItem = response.body[0];
    expect(firstItem).toHaveProperty('id');
    expect(firstItem).toHaveProperty('tag');
    expect(firstItem).toHaveProperty('data');
    expect(firstItem).toHaveProperty('publishedAt');
  });

  it('should have valid publishedAt timestamps', async () => {
    const response = await request(server).get('/latest-updates');
    const items = response.body;
    items.forEach(item => {
      expect(new Date(item.publishedAt)).toBeInstanceOf(Date);
    });
  });

});
server.close();