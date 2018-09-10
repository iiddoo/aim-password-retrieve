const validate = require('../lib/validate-safe');
const { expect } = require('chai');

describe('Validate safe', ()=> {
    it('Should throw error for undefined safe', () => {
        expect(() => validate()).to.throw('Safe input is mandatory. Current value is: undefined');
    });
    it('Should throw error for safe type is not a string', () => {
        expect(() => validate(1)).to.throw('Safe input must be a string. Current type is: number');
    });
    it('Should throw error for safe contains forbidden characters', () => {
        expect(() => validate('safe$')).to.throw('Safe input contains illegal characters. Current value is: safe$');
    });
    it('Should be valid safe', () => {
        expect(validate('safe_name')).to.equal(); 
    });
});
