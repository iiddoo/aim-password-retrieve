
/**
 * Validate safe parameter
 * @param {string} safe
 */
module.exports = safe => {
    // validate input value
    if (!safe) {
        throw new Error(`Safe input is mandatory. Current value is: ${safe}`);
    }
    // validate string type
    if (typeof safe !== 'string') {
        throw new Error(`Safe input must be a string. Current type is: ${typeof safe}`);
    }
    // validate forbidden characters 
    if (/\W/g.test(safe)) {
        throw new Error(`Safe input contains illegal characters. Current value is: ${safe}`);
    }
};