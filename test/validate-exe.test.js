const validate = require('../lib/validate-exe');
const { expect } = require('chai');

describe('Validate executable', ()=> {
    it('Should throw error for executable not found', () => {
        expect(() => validate('testPlatform')).to.throw('Executable ./test.exe not exists');
    });
    it('Should executable be valid', () => {
        expect(validate()).to.equal(); 
    });
});

