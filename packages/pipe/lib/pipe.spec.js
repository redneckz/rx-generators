const pipe = require('./pipe');

describe('pipe', () => {
  it('should fail if no operators provided', () => {
    expect(() => pipe()).toThrow();
  });
});
