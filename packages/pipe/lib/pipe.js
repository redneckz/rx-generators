module.exports = pipe;

/**
 * High order operator for composition
 *
 * @param {Array<GOP>} operators
 * @return {GOP} composed operator
 */
function pipe(...operators) {
  return operators.reduce((a, b) => iter => b(a(iter)));
}
