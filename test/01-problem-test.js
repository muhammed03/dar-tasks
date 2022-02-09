const assert = require('assert');
const task = require('../src/01-problem');
it.optional = require('../extensions/it-optional');

describe('01-problem', () => {
  it.optional(
    'colorPatternTimes should return how long it takes to color the whole pattern',
    () => {
      assert.equal(task.colorPatternTimes(['Blue']), 2);
      assert.equal(
        task.colorPatternTimes(['Red', 'Yellow', 'Green', 'Blue']),
        11
      );
      assert.equal(
        task.colorPatternTimes(['Blue', 'Blue', 'Blue', 'Red', 'Red', 'Red']),
        13
      );
    }
  );
});
