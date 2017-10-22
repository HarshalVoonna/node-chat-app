const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non string values', () => {
      var str = {name: 'name'};
      var result = isRealString(str);
      expect(result).toBe(false);
  });

  it('should reject empty string values', () => {
    var str = '  ';
    var result = isRealString(str);
    expect(result).toBe(false);
  });

  it('should allow valid string values', () => {
    var str = 'real string';
    var result = isRealString(str);
    expect(result).toBe(true);
  });
})
