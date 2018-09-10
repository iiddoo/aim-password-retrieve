const config = require('../config');

/**
 * Set execution command
 * @param {string} user
 * @param {string} appID
 * @param {string} safe
 * @return {string}
 */
module.exports = (user, appID, safe) => {
    try {
        const platform = process.platform;
        const command = `${config.path[platform]}${appID}${safe}${user}`;
        return command;
    } catch (error) {
        throw new Error(error);
    }
};