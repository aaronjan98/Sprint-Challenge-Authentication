const request = require('supertest');
const server = require('../api/server');

// const db = require('../database/dbConfig');
// const Users = require('../users/model');


describe('register route', () => {
    it('should run the tests', () => {
        expect(true).toBe(true);
    })
    
    describe('test environment', function () {
        it('should use the testing environment', function () {
            expect(process.env.NODE_ENV).toBe('testing');
        })
    })

    // describe('insert()', function () {
    //     beforeEach( async () => {
    //         await db('users').truncate();
    //     })
    // })
    
    // describe('POST /api/auth/register', () => { 
    //     it('should add the created user', async() => {
    //         await Users.add({username: "b", password: "pass"});

    //         await db('users').expect(res.status).toBe(201);
    //     })
    // })
    
    describe('POST /api/auth/register', () => { 
        it('should add the created user', function(done) {
            request(server)
            .post('/api/auth/register')
            .send({username: "c", password: "pass"})
            // .setHeader('Authorization', token)
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
        })
    })
});


describe('login route', () => {
    it('should run the tests', () => {
        expect(true).toBe(true);
    })
    
    describe('test environment', function () {
        it('should use the testing environment', function () {
            expect(process.env.NODE_ENV).toBe('testing');
        })
    })

    describe('POST /api/auth/login', () => { 

        function loginUser(auth) {
            
            it('should login the user', function(done) {
                request(server)
                .post('/api/auth/login')
                // .set('Authorization', 'bearer ' + auth.token)
                .send({username: "d", password: "pass"})
                .expect(200)
                .end(onResponse);
                    
                    function onResponse(err, res) {
                        auth.token = res.body.token;
                        return done();
                    }
                })
        };
    })
});