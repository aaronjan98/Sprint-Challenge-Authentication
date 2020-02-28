require("dotenv").config();
const request = require('supertest');
const server = require('../api/server');

describe("jokes", function() {
    it('should run the tests', () => {
        expect(true).toBe(true);
    })

    describe("environment", function() {
        it("should use the testing environment", function() {
            expect(process.env.NODE_ENV).toBe("testing");
        });
    });

    describe('GET /api/jokes', () => {
            let auth = {};
            beforeAll((done) => {

                request(server)
                .post('/api/auth/login')
                .send({username: "d", password: "pass"})
                .expect(200)
                .end(onResponse);
                    
                function onResponse(err, res) {
                    auth.token = res.body.token;
                    return done();
                }
            })

            it('should require authorization', function() {
                
                return request(server)
                .get('/api/jokes')
                .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4LCJ1c2VybmFt')
                .expect(401);
            });
            
            it('should respond with JSON array', function() {
                console.log('auth!!!!!!!!!!!!', auth);
                return request(server)
                .get('/api/jokes')
                .set('Authorization', auth.token)
                .expect(200);
            });
    })
});
