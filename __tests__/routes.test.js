const request = require('supertest');
const app = require('../server');

describe('Test route /validate-jwt', () => {
    it('should be return true when jwt is valid', async () => {
        const token = 'eyJhbGciOiJIUzI1NiJ9eyJSb2xlIjoiQWRtaW4iLCJTZWVkIjoiNzg0MSIsIk5hbWUiOiJUb25pbmhvIEFyYXVqbyJ9QY05sIjtrcJnP533kQNk8QXcaleJ1Q01jWY_ZzIZuAg';
        const response = await request(app)
            .get(`/validate-jwt?token=${token}`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
    });

    it('should be return false when the jwt is not valid', async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        const response = await request(app)
            .get(`/validate-jwt?token=${token}`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(false);
    });
});