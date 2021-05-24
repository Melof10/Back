const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { GET_POSTS } = require('../constants');
const should = chai.should();

chai.use(chaiHttp)

describe('/GET posts', () => {
    it('Get all posts', (done) => {
        chai.request(app)
        .get(GET_POSTS)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});