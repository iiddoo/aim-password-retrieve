const config = require('../config');

/**
 * Validate platform
 */
module.exports = testPlatform => {
    try {
        const platform = testPlatform || process.platform;
        const valid = config[platform];
        if (!valid) {
            throw new Error(`Platform ${platform} is not supported`);
        }
    } catch (error) {
        throw new Error(error);
    }
};