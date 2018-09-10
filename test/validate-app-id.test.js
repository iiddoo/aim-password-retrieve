const validate = require('../lib/validate-app-id');
const { expect } = require('chai');

describe('Validate appID', ()=> {
    it('Should throw error for undefined appID', () => {
        expect(() => validate()).to.throw('AppID input is mandatory. Current value is: undefined');
    });
    it('Should throw error for appID type is not a string', () => {
        expect(() => validate(1)).to.throw('AppID input must be a string. Currne type is: number');
    });
    it('Should throw error for appID contains forbidden characters', () => {
        expect(() => validate('appID$')).to.throw('AppID input contains illegal characters. Current value is: appID$');
    });
    it('Should be valid appID', () => {
        expect(validate('app_ID')).to.equal(); 
    });
});
