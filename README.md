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