const gop = require('@redneckz/gop');

/**
 * http://reactivex.io/documentation/operators/map.html
 *
 * @param {Function} mapper
 * @return {GOP} generator operator
 */
const map = mapper => gop((value, i, iterable) => ({
  value: mapper(value, i, iterable),
}));

module.exports = map;
