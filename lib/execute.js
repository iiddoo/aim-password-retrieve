const execSync = require('child_process').execSync;

/**
 * Execute shell command
 * @param {string} command
 * @return {string}
 */
module.exports = command => {
    return new Promise((resolve, reject) => {
        try { 
            const result = execSync(command);
            resolve(result.toString());
        } catch (error) {
            reject(error);
        }
    });
};
