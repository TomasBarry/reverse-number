const chai = require('chai');
const fc = require('fast-check');
const expect = chai.expect;

// Resolve through package.json "main", as an installed copy does
const reverse = require('..');

const LARGEST = 4294967295;
const reverseDigits = n => Number(String(n).split('').reverse().join(''));

describe('Reverse', () => {
  describe('Valid Numbers', () => {
    it('should correctly reverse numbers', () => {
      expect(reverse(0)).to.equal(0);
      expect(reverse(1)).to.equal(1);
      expect(reverse(10)).to.equal(1);
      expect(reverse(101)).to.equal(101);
      expect(reverse(4321)).to.equal(1234);
    });

    it('should reverse numbers past the signed 32-bit range', () => {
      expect(reverse(1000000003)).to.equal(3000000001);
      expect(reverse(2000000004)).to.equal(4000000002);
    });

    it('should match string reversal for every 32-bit unsigned integer', () => {
      fc.assert(fc.property(fc.integer({ min: 0, max: LARGEST }), n => {
        if (reverseDigits(n) <= LARGEST) {
          expect(reverse(n)).to.equal(reverseDigits(n));
        } else {
          expect(() => reverse(n)).to.throw(`the reverse of ${n} is greater than ${LARGEST}`);
        }
      }));
    });
  });

  describe('Invalid Numbers', () => {
    it('should correctly throw errors', () => {
      expect(() => reverse(-1)).to.throw('-1 is less than 0');
      expect(() => reverse(LARGEST + 1)).to.throw(`${LARGEST + 1} is greater than ${LARGEST}, the largest 32-bit unsigned integer`);
      expect(() => reverse(1000000005)).to.throw(`the reverse of 1000000005 is greater than ${LARGEST}`);
      expect(() => reverse(12.5)).to.throw('12.5 is not an integer');
      expect(() => reverse(NaN)).to.throw('NaN is not an integer');
    });

    it('should throw for every integer too big for 32 bits', () => {
      fc.assert(fc.property(fc.integer({ min: LARGEST + 1, max: Number.MAX_SAFE_INTEGER }), n => {
        expect(() => reverse(n)).to.throw(`${n} is greater than ${LARGEST}`);
      }));
    });

    it('should throw for every number that is not an integer', () => {
      fc.assert(fc.property(fc.double().filter(n => !Number.isInteger(n)), n => {
        expect(() => reverse(n)).to.throw(`${n} is not an integer`);
      }));
    });
  });

  describe('Not Numbers', () => {
    it('should correctly throw errors', () => {
      expect(() => reverse('hello')).to.throw('hello is not a number');
    });
  });
});
