const request = require('supertest');
const app = require('../server');

describe('Test middleware verifyJWT', () => {
    it('should return true when JWT claims are valid', async () => {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJTZWVkIjoiNzg0MSIsIk5hbWUiOiJUb25pbmhvIEFyYXVqbyJ9.QY05sIjtrcJnP533kQNk8QXcaleJ1Q01jWY_ZzIZuAg';
        const response = await request(app)
            .get(`/validate-jwt?token=${token}`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body).toHaveProperty('success');
    });

    it('should return false when JWT claims are not valid', async () => {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiRXh0ZXJuYWwiLCJTZWVkIjoiODgwMzciLCJOYW1lIjoiTTRyaWEgT2xpdmlhIn0.6YD73XWZYQSSMDf6H0i3-kylz1-TY_Yt6h1cV2Ku-Qs';
        const response = await request(app)
            .get(`/validate-jwt?token=${token}`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(false);
        expect(response.body).toHaveProperty('success');
    });

    it('should return false when JWT token is invalid', async () => {
        const token = 'eyJhbGciOiJzI1NiJ9.dfsdfsfryJSr2xrIjoiQWRtaW4iLCJTZrkIjoiNzg0MSIsIk5hbrUiOiJUb25pbmhvIEFyYXVqbyJ9.QY05fsdfsIjtrcJnP533kQNk8QXcaleJ1Q01jWY_ZzIZuAg';
        const response = await request(app)
            .get(`/validate-jwt?token=${token}`);

        expect(response.status).toBe(401);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe('Invalid Token');
        expect(response.body).toHaveProperty('success');
    });

    it('should return false when JWT token is missing', async () => {
        const response = await request(app)
            .get('/validate-jwt');

        expect(response.status).toBe(403);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe('Token is missing.');
        expect(response.body).toHaveProperty('success');
    });
});