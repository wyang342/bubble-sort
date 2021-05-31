var sequence = [4, 3, 5, 0, 1]
var swaps = 0

// Your Code Here

const bubbleSort = (arr) => {
  let previousIndex = 0;
  let currentIndex = 1;

  while (arr[currentIndex] != null) {
    let previous = arr[previousIndex];
    let current = arr[currentIndex];

    if (previous > current) {
      // Swap using temp variable
      let temp = current;
      arr[currentIndex] = previous;
      arr[previousIndex] = temp;
      swaps++;

      // Reset previousIndex & currentIndex
      previousIndex = 0;
      currentIndex = 1;
    } else {
      previousIndex++;
      currentIndex++;
    }
  }

  return arr;
}

// console.log("Result: " + bubbleSort(sequence));
// console.log("Swaps: " + swaps)

module.exports = bubbleSort;