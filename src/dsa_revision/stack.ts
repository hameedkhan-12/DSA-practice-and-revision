const nextSmallerElementLeftIndex = (arr: number[]) => {
  const n = arr.length;
  const stack: number[] = [];
  const arrIndex = new Array(n);

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    arrIndex[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  return arrIndex;
};

console.log(nextSmallerElementLeftIndex([2, 1, 5, 6, 2, 3]));

const nextSmallerElementRightIndex = (arr: number[]) => {
  const n = arr.length;
  const stack: number[] = [];
  const arrIndex = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }

    arrIndex[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }

  return arrIndex;
};

console.log(nextSmallerElementRightIndex([2, 1, 5, 6, 2, 3]));

const largestRectangleInHistogram = (arr: number[]) => {
  const leftIndex = nextSmallerElementLeftIndex(arr);
  const rightIndex = nextSmallerElementRightIndex(arr);

  let largestArea = 0;
  for (let i = 0; i < arr.length; i++) {
    const area = arr[i] * (rightIndex[i] - leftIndex[i] - 1);
    largestArea = Math.max(area, largestArea);
  }

  return largestArea;
};
console.log(largestRectangleInHistogram([2, 1, 5, 6, 2, 3]));
