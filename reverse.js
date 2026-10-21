const LARGEST = 4294967295;

function reverseN(n) {
  const zero = n & ~n;
  const minusOne = ~zero;
  const one = minusOne >>> minusOne; // a shift count of -1 means 31, so only the top bit is left

  const or = (a, b) => ~(~a & ~b);
  const xor = (a, b) => ~(~(a & ~b) & ~(~a & b));

  // bit walks from 1 up to 1 << 31 and then falls off the top: 32 rounds, one per carry
  const add = (a, b) => {
    for (let bit = one; bit; bit <<= one) {
      const sum = xor(a, b);
      b = (a & b) << one;
      a = sum;
    }
    return a;
  };
  const negate = a => add(~a, one);
  const subtract = (a, b) => add(a, negate(b));

  const two = one << one;
  const three = or(two, one);
  const four = one << two;
  const six = or(four, two);
  const eight = one << three;
  const nine = or(eight, one);
  const sixteen = one << four;

  const timesTen = a => add(a << three, a << one);

  // divu10 from Hacker's Delight; the last step adds 1 when the remainder is 10 or more
  const divideByTen = x => {
    let quotient = add(x >>> one, x >>> two);
    quotient = add(quotient, quotient >>> four);
    quotient = add(quotient, quotient >>> eight);
    quotient = add(quotient, quotient >>> sixteen);
    quotient = quotient >>> three;
    const remainder = subtract(x, timesTen(quotient));
    return add(quotient, add(remainder, six) >>> four);
  };

  let reversed = zero;
  // bit walks from 1 << 9 down to 1: ten rounds, as a 32-bit number has at most ten digits
  for (let bit = one << nine; bit; bit >>>= one) {
    const quotient = divideByTen(n);
    const digit = subtract(n, timesTen(quotient));
    // -1 while n has digits left and 0 after, as n | -n has its top bit set unless n is 0
    const live = negate(or(n, negate(n)) >>> minusOne);
    reversed = or(add(timesTen(reversed), digit) & live, reversed & ~live);
    n = quotient;
  }
  return reversed >>> zero;
}

// A ten-digit n reverses to its last digit times 10^9 plus the reverse of its first nine
// digits, which can pass LARGEST; anything shorter reverses to less than 10^9.
function reverseFits(n) {
  return n < 1e9 || (n % 10) * 1e9 + reverseN(Math.floor(n / 10)) <= LARGEST;
}

module.exports = function(n) {
  if (typeof n !== 'number') {
    throw new Error(`${n} is not a number`);
  }
  else if (!Number.isInteger(n)) {
    throw new Error(`${n} is not an integer`);
  }
  else if (n < 0) {
    throw new Error(`${n} is less than 0`);
  }
  else if (n > LARGEST) {
    throw new Error(`${n} is greater than ${LARGEST}, the largest 32-bit unsigned integer`);
  }
  else if (!reverseFits(n)) {
    throw new Error(`the reverse of ${n} is greater than ${LARGEST}`);
  }
  else {
    return reverseN(n);
  }
};
