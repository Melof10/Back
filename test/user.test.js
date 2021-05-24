const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { POST_USER_TEST } = require('../constants');
const should = chai.should();

chai.use(chaiHttp)

describe('/POST user (login)', () => {
    it('Login', (done) => {
        chai.request(app)
        .post(POST_USER_TEST)
        .send({            
            email: 'test@conexa.com',            
            password: 'test'            
        })
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});