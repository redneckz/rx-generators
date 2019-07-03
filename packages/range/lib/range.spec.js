const range = require('./range');

describe('range', () => {
  it('should generate natural numbers if no params provided', () => {
    const limit = 1 + inf();
    const infinite = range();
    for (let value = 0; value < limit; value += 1) {
      expect(infinite.next()).toEqual({
        value,
        done: false,
      });
    }
  });

  it('should generate natural numbers starting from some value', () => {
    const start = inf();
    const limit = start + 1 + inf();
    const infinite = range(start);
    for (let value = start; value < limit; value += 1) {
      expect(infinite.next()).toEqual({
        value,
        done: false,
      });
    }
  });

  it('should generate exact count of natural numbers if count param provided', () => {
    const count = 10;
    const finite = range(0, count);
    for (let value = 0; value < count; value += 1) {
      expect(finite.next()).toEqual({
        value,
        done: false,
      });
    }
    expect(finite.next()).toEqual({
      done: true,
    });
  });

  it('should generate exact count of natural numbers starting from some value if both params provided', () => {
    const start = 3;
    const count = 10;
    const finite = range(start, count);
    for (let value = start; value < count; value += 1) {
      expect(finite.next()).toEqual({
        value,
        done: false,
      });
    }
    expect(finite.next()).toEqual({
      done: true,
    });
  });
});

function inf() {
  return Math.round(Math.random() * 100);
}
