const expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
     var from = 'Admin';
     var text = 'sample message';
     var result = generateMessage(from, text);
     expect(result.from).toBe(from);
     expect(result.text).toBe(text);
     expect(typeof result.createdAt).toBe('number');
  });
});
