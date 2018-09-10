const command = require('../lib/command');
const { expect } = require('chai');

describe('Get command', ()=> {
    it('Should return string', () => {
        expect(command('user', 'my_app', 'my_safe')).to.be.a('string'); 
    });
});