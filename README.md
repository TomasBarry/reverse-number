[![npm](https://img.shields.io/npm/dt/express.svg)](https://www.npmjs.com/package/reverse-number)

# reverse-number
Reverse a number without having to do any conversions!

## Installation
To install, run ```npm install reverse-number --save```

## Usage
The following snippet shows just how easily you can reverse a number:
```javascript
const reverse = require('reverse-number');

const my_number = 1234; // The number to be reversed

const my_number_reversed = reverse(my_number); // The reverse of your number

console.log(`${my_number} reversed is ${my_number_reversed}`); // Prints 1234 reversed is 4321
```

## Notes
1. Numbers must be positive
2. Numbers must be less than Number.MAX_SAFE_INTEGER
