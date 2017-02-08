const reverse = require('../reverse.js);

describe('Reverse', () => {
  describe('Numbers', () => {
    it('should correctly reverse numbers', (done) => {
      expect(reverse(0)).to.equal(0);
      expect(reverse(1)).to.equal(1);
      expect(reverse(10)).to.equal(01);
      expect(reverse(101)).to.equal(101);
      expect(reverse(4321)).to.equal(1234);
      done();
    });
  });
});
