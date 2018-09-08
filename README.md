[![Build Status](https://travis-ci.org/iiddoo/aim-password-retrieve.svg?branch=master)](https://travis-ci.org/iiddoo/aim-password-retrieve)
[![Coverage Status](https://coveralls.io/repos/github/iiddoo/aim-password-retrieve/badge.svg?branch=master)](https://coveralls.io/github/iiddoo/aim-password-retrieve?branch=master)
[![npm version](https://badge.fury.io/js/%40iiddoo%2Faim-password-retrieve.svg)](https://badge.fury.io/js/%40iiddoo%2Faim-password-retrieve)
[![NPM version][npm-image]][npm-url]

# aim-password-retrieve
Retrieve password from CyberArk vault object with AIM client

## Installation

  `npm install @iiddoo/aim-password-retrieve`

## Usage

    const retriever = require('@iiddoo/aim-password-retrieve');

    const pwd = retriever('user');

  
  Output should be `password`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.