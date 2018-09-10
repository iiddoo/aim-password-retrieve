const index = require('../index');
const { expect } = require('chai');

describe('Index', ()=> {
    it('Should return password', async () => {
        const pwd = await index('user', 'my_appID', 'my_safe');
        expect(pwd).to.be.a('string'); 
    });
});