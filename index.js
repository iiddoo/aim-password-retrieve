'use strict';

const validateUser = require('./lib/validate-user');
const validateAppID = require('./lib/validate-app-id');
const validateSafe = require('./lib/validate-safe');
const validatePlatform = require('./lib/validate-platform');
const validateExe = require('./lib/validate-exe');
const command = require('./lib/command');
const execute = require('./lib/execute');

const verify = (user, appID, safe) => {
    if (!user || !appID || !safe) {
        throw new Error('One or more parameters missing');
    }
}
/**
 * Get user password 
 * @param {string} user
 * @param {string} appID
 * @param {string} safe
 * @return {string}
 */

module.exports = (user, appID, safe) => {
    return new Promise((resolve, reject) => {
        try {
            // verify parameters
            verify(user, appID, safe);
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
            const cmd = command(user, appID, safe);
            // execute shell command
            const password = execute(cmd);
            // return result
            resolve(password); 
        } catch (error) { 
            reject(error);
        }
    });
};  

