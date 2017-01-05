'use strict';
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

const code = require('../TwoSum.js');
const expect = require('chai').expect;

describe("twoSum", () => {

  it("should only accept two arguments", ()=> {
    expect(code.twoSum()).to.equal('Only two arguments are accepted.');
  });

  it("should only accept two arguments", () => {
    expect(code.twoSum([2, 3, 7, 11, 13], 18, 34)).to.equal('Only two arguments are accepted.');
  });

  it("should have an input type of an array and an integer", () => {
    expect(code.twoSum(44, 63)).to.equal('Inputs of an array and an integer is expected!');
  });

  it("should have an input type of an array and an integer", () => {
    expect(code.twoSum([2, 3, 5, 7, 11, 13], 'exotic fruit')).to.equal('Inputs of an array and an integer is expected!');
  });

  it("should have an output type of an array", () => {
    expect(code.twoSum([2, 3, 5, 7, 11, 13], 24)).to.be.a('array');
  });

  it("should output the expected value", ()=> {
    expect(code.twoSum([2, 3, 5, 7, 11, 13], 24)).to.deep.equal([4, 5]);
  });

});
