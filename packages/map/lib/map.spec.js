const map = require('./map');

describe('map', () => {
  it('should map iterable by means of mapper function', () => {
    const iterator = map(
      v => v % 2,
    )(
      [1, 2, 3, 4, 5],
    );
    expect([...iterator]).toEqual([1, 0, 1, 0, 1]);
  });

  it('should return original iterator if identity mapper provided', () => {
    const list = [1, 2, 3, 4, 5];
    const iterator = map(v => v)(list);
    expect([...iterator]).toEqual(list);
  });

  it('should pass value, index and iterable to mapper function for each value in original iterable', () => {
    const mapper = jest.fn(v => v);
    const list = [1, 2, 3];
    const iterator = map(mapper)(list);
    expect([...iterator]).toEqual(list);
    expect(mapper).toBeCalledWith(1, 0, list);
    expect(mapper).toBeCalledWith(2, 1, list);
    expect(mapper).toBeCalledWith(3, 2, list);
  });

  it('should return empty iterator if no iterable provided', () => {
    const iterator = map(() => {})();
    expect([...iterator]).toEqual([]);
  });
});
