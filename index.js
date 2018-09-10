'use strict';

const validateUser = require('./lib/validate-user');
const validateAppID = require('./lib/validate-app-id');
const validateSafe = require('./lib/validate-safe');
const validatePlatform = require('./lib/validate-platform');
const validateExe = require('./lib/validate-exe');
const command = require('./lib/command');

/**
 * Get user password 
 * @param {string} user
 * @param {string} appID
 * @param {string} safe
 * @return {string}
 */
module.exports =  (user, appID, safe) => {
    return new Promise((resolve, reject) => {
        try {
            // validate user input
            validateUser(user);
            // validate appID input
            validateAppID(appID);
            // validate safe input
            validateSafe(safe);
            // validate platform
            validatePlatform();
            // validate executable file
            validateExe();
            // set command string
            //const cmd = command(user, appID, safe);
            // execute shell command with parameters
            // validate result
            resolve('password');
        } catch (error) {
            reject(error);
        }
    });
};
