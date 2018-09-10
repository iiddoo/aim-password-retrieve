const command = require('../lib/command');
const { expect } = require('chai');

describe('Get command', ()=> {
    it('Should throw error', done => {
        expect(command()).to.throw
        done()
    });
    it('Should return string', () => {
        expect(command('user', 'my_app', 'my_safe')).to.be.a('string'); 
    });
});