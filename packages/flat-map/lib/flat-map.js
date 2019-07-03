const gop = require('@redneckz/gop');

/**
 * http://reactivex.io/documentation/operators/flatmap.html
 *
 * @param {Function} mapper
 * @return {GOP} generator operator
 */
const flatMap = mapper => gop((value, i, iterable) => ({
  values: mapper(value, i, iterable),
}));

module.exports = flatMap;
