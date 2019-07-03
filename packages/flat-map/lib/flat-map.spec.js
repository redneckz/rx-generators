const flatMap = require('./flat-map');

describe('flatMap', () => {
  it('should map iterable by means of mapper function', () => {
    const iterator = flatMap(
      v => [v, v % 2],
    )(
      [1, 2, 3, 4, 5],
    );
    expect([...iterator]).toEqual([1, 1, 2, 0, 3, 1, 4, 0, 5, 1]);
  });
});
