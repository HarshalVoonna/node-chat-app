const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location message', () => {
    var from = 'Admin';
    var latitude = 1;
    var longitude = 1;
    var result = generateLocationMessage(from, latitude, longitude);
    expect(result.from).toBe(from);
    expect(result.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
  })
})
