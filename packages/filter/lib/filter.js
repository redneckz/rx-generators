const gop = require('@redneckz/gop');

/**
 * http://reactivex.io/documentation/operators/filter.html
 *
 * @param {Function} predicate
 * @return {GOP} generator operator
 */
const filter = predicate => gop((value, i, iterable) => ({
  value,
  skip: !predicate(value, i, iterable),
}));

module.exports = filter;
