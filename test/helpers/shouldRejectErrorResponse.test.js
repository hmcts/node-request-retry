'use strict'

const shouldRejectErrorResponse = require('../../helpers/shouldRejectErrorResponse');
const expect = require('chai').expect;

describe('shouldRejectErrorResponse', function () {
  [{ simple: true }, {}].forEach(options => {
    it(`should return true for ${options.simple} simple`, function () {
      expect(shouldRejectErrorResponse({ options: options })).to.equal(true);
    });
  });

  it('should return false for options.simple false', function () {
    expect(shouldRejectErrorResponse({ simple: false })).to.equal(false);
  });

  it('should return true for options is null', function () {
    expect(shouldRejectErrorResponse(null)).to.equal(true);
  });

  it('should return true for options is undefined', function () {
    expect(shouldRejectErrorResponse(undefined)).to.equal(true);
  });

});
