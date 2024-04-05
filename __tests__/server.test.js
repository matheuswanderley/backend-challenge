const request = require('supertest');
const app = require('../server');

describe('HealthCheck Test', () => {
    test('should be responde with 200 in /healthcheck', async () => {
        const response = await request(app).get('/healthcheck');
        expect(response.status).toBe(200);
    });
});