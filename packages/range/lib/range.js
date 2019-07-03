module.exports = range;

/**
 * http://reactivex.io/documentation/operators/range.html
 *
 * @param {number} start
 * @param {number} count
 * @return {Generator}
 */
function* range(start, count) {
  const lower = start || 0;
  const upper = count || Infinity;
  for (let i = lower; i < upper; i += 1) {
    yield i;
  }
}
