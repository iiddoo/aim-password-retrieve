[![Build Status](https://travis-ci.org/iiddoo/aim-password-retrieve.svg?branch=master)](https://travis-ci.org/iiddoo/aim-password-retrieve)
[![Coverage Status](https://coveralls.io/repos/github/iiddoo/aim-password-retrieve/badge.svg?branch=master)](https://coveralls.io/github/iiddoo/aim-password-retrieve?branch=master)
[![npm version](https://badge.fury.io/js/%40iiddoo%2Faim-password-retrieve.svg)](https://badge.fury.io/js/%40iiddoo%2Faim-password-retrieve)

# aim-password-retrieve
Retrieve password for user

## Installation

  `npm install @iiddoo/aim-password-retrieve`

## Usage
```javascript
    const retriever = require('@iiddoo/aim-password-retrieve');

    // ES6 async\await
    (async () => {
      try {
        const pwd = await retriever('user');
      } catch (error) {
        // error handle
      }
    })();

    // Promise
    retriever('user')
      .then((result) => {
        const pwd = result;
      })
      .catch((error) => {
        // error handle
      })
``` 

## Tests

  `npm test`
