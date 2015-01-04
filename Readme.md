# co-crypto

Thunkified crypto module.

[![Circle CI](https://circleci.com/gh/vdemedes/co-crypto.svg?style=svg)](https://circleci.com/gh/vdemedes/co-crypto)

## Installation

```
$ npm install co-crypto --save
```

## Usage

```
var crypto = require('crypto');

var bytes = yield crypto.randomBytes(20);

var hash = crypto.createHash('md5').update('hello').digest('hex');
```

## License

Released under MIT license.