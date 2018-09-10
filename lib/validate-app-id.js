
/**
 * Validate appID parameter
 * @param {string} appID
 */
module.exports = appID => {
    // validate input value
    if (!appID) {
        throw new Error(`AppID input is mandatory. Current value is: ${appID}`);
    }
    // validate string type
    if (typeof appID !== 'string') {
        throw new Error(`AppID input must be a string. Currne type is: ${typeof appID}`);
    }
    // validate forbidden characters 
    if (/\W/g.test(appID)) {
        throw new Error(`AppID input contains illegal characters. Current value is: ${appID}`);
    }
};