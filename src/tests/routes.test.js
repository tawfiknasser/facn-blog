const test = require('tape');
const supertest = require('supertest');
const app = require('../app');

test('200 status', t => {
    supertest(app)
        .get('/posts')
        .expect(200)
        .end(function (err, res) {
            t.equal(res.statusCode, 200, `200 status code`);
            t.end();
        });
});

test('check for favicon handling', (t) => {
    supertest(app)
        .get("/favicon.ico")
        .expect(200)
        .expect('Content-Type', /x-icon/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.statusCode, 200, 'Should return 200');
            t.end();

        });
});

test("check sending", t => {
    supertest(app)
        .get("/addpost?id=112&title=hala&desc=tests")
        .expect(200)
        .end(function (err, res) {
            t.equal(res.statusCode, 200, `/ route sends data`);
            t.end();
        });
});

test("check redirect", t => {
    supertest(app)
        .post("/addpost")
        .expect(302)
        .end(function (err, res) {
            t.equal(res.statusCode, 302, `/ route redirected`);
            t.end();
        });
});

test('check for assets handling', (t) => {
    supertest(app)
        .get("/styles.css")
        .expect(200)
        .expect('Content-Type', /css/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.statusCode, 200, 'Should return 200');
            t.end();

        });
});

test("404 page", t => {
    supertest(app)
        .get("/error")
        .expect(404)
        .end(function (err, res) {
            t.equal(res.statusCode, 404, `404 status code`);
            t.end();
        });
});

test.onFinish(() => process.exit(0));