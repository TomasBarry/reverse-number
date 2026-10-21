[![npm](https://img.shields.io/npm/dt/reverse-number.svg)](https://www.npmjs.com/package/reverse-number)

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

## How it works
The reversing uses four operators: `~`, `&`, `<<` and `>>>`. It has no `+`, `-`, `*`, `/` or `%`, no comparisons, no `?:`, no recursion and no numeric literals.

- Every constant comes from the input. `n & ~n` is 0, `~0` is -1, and `-1 >>> -1` is 1, because a shift count of -1 means 31.
- OR and XOR are built from `~` and `&`.
- Adding is a ripple-carry adder run for 32 rounds. Subtracting adds the two's complement.
- Dividing by 10 is the shift-and-add method from *Hacker's Delight*.
- Every number gets ten rounds, one per digit a 32-bit number can have. A mask keeps the result fixed once the digits run out.

The input checks are ordinary JavaScript.

## Notes
1. Numbers must be whole and not negative.
2. Numbers must be at most 4294967295, the largest 32-bit unsigned integer, and so must their reverse. `reverse(1000000003)` is `3000000001`, but `reverse(1000000005)` throws, as `5000000001` is too big.
3. Anything else throws an error saying which rule it broke.
