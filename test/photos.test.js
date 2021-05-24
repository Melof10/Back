const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { GET_PHOTOS_TEST, GET_PHOTO_TEST } = require('../constants');
const should = chai.should();

chai.use(chaiHttp)

describe('/GET photos', () => {
    it('Get all photos', (done) => {
        chai.request(app)
        .get(GET_PHOTOS_TEST)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

describe('/GET photo', () => {
    it('Get photo by ID', (done) => {
        chai.request(app)
        .get(GET_PHOTO_TEST)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});