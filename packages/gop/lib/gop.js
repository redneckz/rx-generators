const sequence = require('./sequence');
const asyncSequence = require('./async-sequence');

module.exports = gop;

function gop(step) {
  const seq = sequence(step);
  const asyncSeq = asyncSequence(step);
  return (iter) => {
    if (!iter) return sequence.nil;
    if (typeof iter.next === 'function') return asyncSeq(iter);
    if (iter[Symbol.asyncIterator]) return asyncSeq(iter);
    if (iter[Symbol.iterator]) return seq(iter);
    throw new TypeError('Unsupported kind of Iterable');
  };
}
