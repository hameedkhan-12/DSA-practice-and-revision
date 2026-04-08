// const nextSmallerElementLeftIndex = (arr: number[]) => {
//   const n = arr.length;
//   const stack: number[] = [];
//   const arrIndex = new Array(n);

//   for (let i = 0; i < n; i++) {
//     while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
//       stack.pop();
//     }
//     arrIndex[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
//     stack.push(i);
//   }
//   return arrIndex;
// };

// console.log(nextSmallerElementLeftIndex([2, 1, 5, 6, 2, 3]));

// const nextSmallerElementRightIndex = (arr: number[]) => {
//   const n = arr.length;
//   const stack: number[] = [];
//   const arrIndex = new Array(n);

//   for (let i = n - 1; i >= 0; i--) {
//     while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
//       stack.pop();
//     }

//     arrIndex[i] = stack.length === 0 ? n : stack[stack.length - 1];
//     stack.push(i);
//   }

//   return arrIndex;
// };

// console.log(nextSmallerElementRightIndex([2, 1, 5, 6, 2, 3]));

// const largestRectangleInHistogram = (arr: number[]) => {
//   const leftIndex = nextSmallerElementLeftIndex(arr);
//   const rightIndex = nextSmallerElementRightIndex(arr);

//   let largestArea = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const area = arr[i] * (rightIndex[i] - leftIndex[i] - 1);
//     largestArea = Math.max(area, largestArea);
//   }

//   return largestArea;
// };
// console.log(largestRectangleInHistogram([2, 1, 5, 6, 2, 3]));

// const maximalRectangle = (matrix: number[][]) => {
//   if (matrix.length === 0) return 0;

//   const rows = matrix.length;
//   const cols = matrix[0].length;
//   const heights = new Array(cols).fill(0);
//   let maxArea = 0;

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       if (matrix[row][col] === 1) {
//         heights[col] += 1;
//       } else {
//         heights[col] = 0;
//       }
//     }
//     console.log("HEIGHTS ", heights);
//     maxArea = Math.max(maxArea, largestRectangleInHistogram(heights));
//   }
//   return maxArea;
// };
// console.log(
//   maximalRectangle([
//     [1, 0, 1, 1, 0],
//     [1, 1, 0, 1, 1],
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 1, 1],
//   ]),
// );

// const removeKDigits = (arr: string, k: number) => {
//   const stack: string[] = [];

//   for (let num of arr) {
//     while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num) {
//       stack.pop();
//       k--;
//     }
//     stack.push(num);
//   }
//   if (k > 0) {
//     stack.pop();
//     k--;
//   }

//   return stack.join('');
// };

// console.log(removeKDigits("1432219", 3));

// const stockSpan = (prices: number[]) => {
//   const stack: number[] = [];
//   let n = prices.length;
//   const span = new Array(n);
//   console.log("SPAN");

//   for (let i = 0; i < n; i++) {
//     while (stack.length > 0 && prices[i] >= prices[stack[stack.length - 1]]) {
//       stack.pop();
//     }

//     span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
//     stack.push(i);
//   }

//   return span;
// };

// console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]));

class StockSpanner {
  private stack: [number, number][];

  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    let span = 1;

    while (
      this.stack.length > 0 &&
      this.stack[this.stack.length - 1][0] <= price
    ) {
      span += this.stack.pop()![1];
    }

    this.stack.push([price, span]);
    console.log(this.stack);
    return span;
  }
}

const stockSpanner = new StockSpanner()
console.log(stockSpanner.next(100))
console.log(stockSpanner.next(80))
console.log(stockSpanner.next(60))
console.log(stockSpanner.next(70))
console.log(stockSpanner.next(60))
console.log(stockSpanner.next(75))
console.log(stockSpanner.next(85))