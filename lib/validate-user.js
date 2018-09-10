
/**
 * Validate user parameter
 * @param {string} user
 */
module.exports = user => {
    // validate input value
    if (!user) {
        throw new Error(`User input is mandatory. Current value is: ${user}`);
    }
    // validate string type
    if (typeof user !== 'string') {
        throw new Error(`User input must be a string. Current type is: ${typeof user}`);
    }
    // validate forbidden characters 
    if (/\W/g.test(user)) {
        throw new Error(`User input contains illegal characters. Current value is: ${user}`);
    }
};