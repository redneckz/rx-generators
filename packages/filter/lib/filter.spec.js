const filter = require('./filter');

describe('filter', () => {
  it('should filter iterable by means of predicate', () => {
    const iterator = filter(
      v => v % 2 === 1,
    )(
      [1, 2, 3, 4, 5],
    );
    expect([...iterator]).toEqual([1, 3, 5]);
  });

  it('should return original iterator if truthy predicate provided', () => {
    const list = [1, 2, 3, 4, 5];
    const iterator = filter(() => true)(list);
    expect([...iterator]).toEqual(list);
  });

  it('should return empty iterator if falsy predicate provided', () => {
    const iterator = filter(() => false)([1, 2, 3, 4, 5]);
    expect([...iterator]).toEqual([]);
  });

  it('should pass value, index and iterable to predicate for each value in original iterable', () => {
    const predicate = jest.fn(() => false);
    const list = [1, 2, 3];
    const iterator = filter(predicate)(list);
    expect([...iterator]).toEqual([]);
    expect(predicate).toBeCalledWith(1, 0, list);
    expect(predicate).toBeCalledWith(2, 1, list);
    expect(predicate).toBeCalledWith(3, 2, list);
  });

  it('should return empty iterator if no iterable provided', () => {
    const iterator = filter(() => true)();
    expect([...iterator]).toEqual([]);
  });
});
