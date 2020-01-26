const divide = require('../index');
const expect = require('chai').expect;

describe('Divide function', () => {
  it('should divide positive integers correctly', () => {
   const a = 8;
   const b = 4;
   const expectedAnswer = 2;

   const actualAnswer = divide(a, b);

   //assertion
    expect(actualAnswer).to.equal(expectedAnswer);
  });

  it('should throw an error when divide by zero', () => {
    const a = 8, b = 0;
    const fn = () => {
      divide(a,b)
    };
    //assert that exception is thrown
 expect (fn).to.throw();
  });
});