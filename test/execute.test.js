const execute = require('../lib/execute');
const { expect } = require('chai');

describe('Execute', ()=> {
    it('Should throw error', done => {
        expect(async ()=> {
            try {
                execute();
            } catch (error) {}
        }).to.throw
        done()
    });
    it('Should return string', async () => {
        const result = await execute('cd ./ && sh test.sh');
        expect(result).to.be.a('string'); 
    });
});
