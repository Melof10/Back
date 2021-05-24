const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { GET_POSTS_TEST, GET_POST_TEST } = require('../constants');
const should = chai.should();

chai.use(chaiHttp)

describe('/GET posts', () => {
    it('Get all posts', (done) => {
        chai.request(app)
        .get(GET_POSTS_TEST)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

describe('/GET post', () => {
    it('Get post by ID', (done) => {
        chai.request(app)
        .get(GET_POST_TEST)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});