const validate = require('../lib/validate-user');
const { expect } = require('chai');

describe('Validate user', ()=> {
    it('Should throw error for undefined user', () => {
        expect(() => validate()).to.throw('User input is mandatory. Current value is: undefined');
    });
    it('Should throw error for user type is not a string', () => {
        expect(() => validate(1)).to.throw('User input must be a string. Current type is: number');
    });
    it('Should throw error for user contains forbidden characters', () => {
        expect(() => validate('user$')).to.throw('User input contains illegal characters. Current value is: user$');
    });
    it('Should be valid user', () => {
        expect(validate('user')).to.equal(); 
    });
});

