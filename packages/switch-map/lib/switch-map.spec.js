const switchMap = require('./switch-map');

describe('switchMap', () => {
  it('should map iterable by means of mapper function', async () => {
    const iter = switchMap(
      v => [v, v % 2],
    )(
      [1, 2, 3, 4, 5],
    );
    expect(await toArray(iter)).toEqual([1, 1, 2, 0, 3, 1, 4, 0, 5, 1]);
  });
});

async function toArray(iterable) {
  const result = [];
  for await (const v of iterable) {
    result.push(v);
  }
  return result;
}
