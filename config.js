/**
 * Configuration file
 * @return {object}
 */
module.exports = {
    windows: {
        path: './index.js',
        command: ''
    },
    darwin: {
        path: './test.sh',
        command: 'sh test.sh'
    },
    ubuntu: {
        path: './test.sh',
        command: ''
    },
    testPlatform: {
        path: './test.exe',
        command: ''
    },
    linux: {
        path: './index.js',
        command: ''
    }
};