const request = require('supertest');
const express = require('express');
const router = require('../src/routes/routes');

const app = express();
app.use(router);

describe('GET /validate-jwt', () => {
    it('should return success: true when JWT is valid', async () => {
        const validToken = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJTZWVkIjoiNzg0MSIsIk5hbWUiOiJUb25pbmhvIEFyYXVqbyJ9.QY05sIjtrcJnP533kQNk8QXcaleJ1Q01jWY_ZzIZuAg';

        const response = await request(app)
            .get(`/validate-jwt?token=${validToken}`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body).toHaveProperty('success');
        expect(response.body.success).toBeDefined();
    });

    it('should return success: false when JWT is not valid', async () => {
        const invalidToken = 'invalid-token-dummy';

        const response = await request(app)
            .get(`/validate-jwt?token=${invalidToken}`);

        expect(response.status).toBe(401);
        expect(response.body.success).toBe(false);
        expect(response.body).toHaveProperty('success');
        expect(response.body.success).toBeDefined();
    });
});