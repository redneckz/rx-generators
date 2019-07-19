/**
 * http://reactivex.io/documentation/operators/flatmap.html
 * http://reactivex.io/documentation/operators/switch.html
 *
 * @param {Function} mapper
 * @return {GOP} generator operator
 */
const switchMap = mapper => async function* g$(iter) {
  const asyncIter = toAsyncIterator(iter);
  let step = asyncIter.next();
  while (true) {
    const { value, done } = await step;
    if (done) break;
    const mappedValues = mapper(value);
    if (!mappedValues) break;
    step = asyncIter.next();
    let switched = false;
    const forceSwitch = () => {
      switched = true;
    };
    Promise.resolve(step).then(forceSwitch, forceSwitch);
    for await (const mappedV of toAsyncIterable(mappedValues)) {
      if (switched) break;
      yield mappedV;
    }
  }
};

module.exports = switchMap;

async function* toAsyncIterator(iter) {
  for (const v of toAsyncIterable(iter)) {
    yield v;
  }
}

function toAsyncIterable(iter) {
  if (iter[Symbol.asyncIterator]) return iter;
  if (iter[Symbol.iterator]) return ({ [Symbol.asyncIterator]: iter[Symbol.iterator] });
  if (typeof iter === 'function') return ({ [Symbol.asyncIterator]: iter });
  throw new TypeError('Unsupported kind of Iterable');
}
