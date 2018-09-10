const validate = require('../lib/validate-platform');
const { expect } = require('chai');

describe('Validate platform', ()=> {
    it('Should throw error for not supported platform', () => {
        expect(() => validate('sierra')).to.throw('Platform sierra is not supported');
    });
    it('Should be valid platform', () => {
        expect(validate('darwin')).to.equal();
    });
});
