module.exports = asyncSequence;

function asyncSequence(step) {
  return async function* g$(iterable) {
    let i = 0;
    for await (const inputValue of iterable) {
      const instruction = step(inputValue, i, iterable);
      const { done, skip } = instruction;
      if (done) break;
      if (!skip) {
        if ('values' in instruction) yield* instruction.values;
        if ('value' in instruction) yield instruction.value;
      }
      i += 1;
    }
  };
}
