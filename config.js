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
        command: 'sh test.sh'
    },
    testPlatform: {
        path: './test.exe',
        command: 'sh test.sh'
    },
    linux: {
        path: './test.sh',
        command: 'sh test.sh'
    }
};