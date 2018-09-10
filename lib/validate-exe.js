const fs = require('fs');
const config = require('../config');

/**
 * Validate executable file
 */
module.exports = testPlatform => {
    try {
        const platform = testPlatform || process.platform;
        const exe = config.path[platform];
        const exists = fs.existsSync(exe);
        if (!exists) {
            throw new Error(`Executable ${exe} not exists`);
        }
    } catch (error) {
        throw new Error(error);
    }
};
