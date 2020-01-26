const expect = require('chai').expect;
const sort = require('../index');

describe('sort ascending', () => {
  it('should sort positive numbers correctly', () => {
    expect(sort([3,7,4])).to.deep.equal([3,4,7]);
  });

  it('should sort if numbers include 0 ', () => {
    expect(sort([0,19,5])).to.deep.equal([0,5,19]);
  });

  it('should sort negative numbers in correct order', () => {
    expect(sort([-2,-19,5])).to.deep.equal([-19,-2,5]);
  });
  it('should not throw error if two values are identical', () => {
    expect(sort([0,5,5])).to.deep.equal([0,5,5]);
  });
});