const chai = require('chai');
const expect = chai.expect;

const reverse = require('../reverse.js');

describe('Reverse', () => {
  describe('Valid Numbers', () => {
    it('should correctly reverse numbers', (done) => {
      expect(reverse(0)).to.equal(0);
      expect(reverse(1)).to.equal(1);
      expect(reverse(10)).to.equal(1);
      expect(reverse(10)).to.equal(01);
      expect(reverse(101)).to.equal(101);
      expect(reverse(4321)).to.equal(1234);
      done();
    });
  });

  describe('Invalid Numbers', () => {
    it('should correctly throw errors', (done) => {
      expect(() => reverse(-1)).to.throw('-1 is less than 0');
      expect(() => reverse(Number.MAX_SAFE_INTEGER + 1)).to.throw(`${Number.MAX_SAFE_INTEGER + 1} is greater than ${Number.MAX_SAFE_INTEGER} which is the maximum safe integer`);
      done();
    });
  });

  describe('Not Numbers', () => {
    it('should correctly throw errors', (done) => {
      expect(() => reverse('hello')).to.throw('hello is not a number');
      done();
    });
  });
});
