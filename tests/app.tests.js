const request = require('supertest');
const app = require('../app'); // Replace with the path to your Express app

describe('TTD Web Scraper API', () => {
  it('should return latest updates', async () => {
    const response = await request(app).get('/latest-updates');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('tag');
    expect(response.body[0]).toHaveProperty('data');
    expect(response.body[0]).toHaveProperty('publishedAt');
  });

  it('should handle empty response gracefully', async () => {
    // Mock an empty response scenario
    jest.spyOn(axios, 'get').mockResolvedValue({ data: [] });

    const response = await request(app).get('/latest-updates');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should validate data format', async () => {
    const response = await request(app).get('/latest-updates');
    expect(response.body[0].id).toBeGreaterThan(0);
    expect(response.body[0].tag).not.toBeNull();
    expect(response.body[0].data).not.toBeEmpty();
    expect(new Date(response.body[0].publishedAt)).not.toBeNaN();
  });

  it('should handle invalid tag error', async () => {
    const response = await request(app).get('/latest-updates?tag=InvalidTag');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
  });

  it('should support pagination with specific limits and offsets', async () => {
    const response = await request(app).get('/latest-updates?limit=5&offset=15');
    expect(response.body.length).toBe(5);
    expect(response.body[0].id).toBe(16);
  });

  it('should support sorting by published date', async () => {
    const response = await request(app).get('/latest-updates?sort=publishedAt');
    expect(response.body[0].publishedAt).toBeLessThanOrEqual(response.body[1].publishedAt);
  });

  // Add more tests here to cover different scenarios and edge cases
});
