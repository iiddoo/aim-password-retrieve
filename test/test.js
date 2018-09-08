const index = require('../index');

it('Should return password', async () => {
    const pwd = await index('user');
    if (pwd !== 'password') {
        throw new Error(`Expected password, but got: ${pwd}`);
    }
})