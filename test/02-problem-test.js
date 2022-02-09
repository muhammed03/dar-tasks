const assert = require('assert');
const task = require('../src/02-problem');
it.optional = require('../extensions/it-optional');

describe('02-problem', () => {
  it.optional(
    'Plant should return a string representing the plant',
    () => {
      assert.equal(task.plant("@", 3, 3, 25), "---@@@---@@@---@@@");
      assert.equal(task.plant("#", 1, 5, 30),  "-#####");
      assert.equal(task.plant("&", 5, 1, 20),   "-----&-----&-----&-----&-----&");
      assert.equal(task.plant("§", 3, 3, 15),  "---------§");
    }
  );
});
