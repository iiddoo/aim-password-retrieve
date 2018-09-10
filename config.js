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
        path: './test/test.sh',
        command: 'cd test/ && sh test.sh'
    },
    ubuntu: {
        path: './test/test.sh',
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