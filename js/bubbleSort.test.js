const sort = require('./bubbleSort');

test('case 1', () => {
  expect(sort([4, 1, 3, 9, 7])).toEqual([1, 3, 4, 7, 9]);
})

test('case 2', () => {
  expect(sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})

test('case 3', () => {
  expect(sort([4, 3, 5, 0, 1])).toEqual([0, 1, 3, 4, 5]);
})