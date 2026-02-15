// const productOfArrayExceptSelf = (arr: number[]) => {
//   let arrNew: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     let product = 1;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] !== arr[j]) product *= arr[j];
//     }
//     arrNew.push(product);
//   }
//   return arrNew;
// };

// console.log(productOfArrayExceptSelf([1, 2, 3, 4]));

// const productOfArrayExceptSelfOptimal = (nums: number[]) => {
//   let n = nums.length;
//   let result: number[] = new Array(n).fill(1)

//   let prefix = 1
//   for(let i = 0; i<n; i++){
//     result[i] = prefix
//     prefix *= nums[i]
//   }

//   let suffix = 1;

//   for(let i = n-1; i>=0; i--){
//     result[i] *=suffix
//     suffix *= nums[i]
//   }

//   return result;
// }

// console.log(productOfArrayExceptSelfOptimal([1, 2, 3, 4]));

// const containerWithMostWater = (nums: number[]) => {
//   let n = nums.length;
//   let result = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       const area = (j - i) * Math.min(nums[i], nums[j]);
//       result = Math.max(result, area);
//     }
//   }
//   return result;
// };

// console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// const containerWithMostWaterOptimal = (arr: number[]) => {
//   let left = 0;
//   let right = arr.length - 1;

//   let result = 0;
//   while (left < right) {
//     const width = right - left;
//     const height = Math.min(arr[left], arr[right]);
//     const area = width * height;
//     result = Math.max(area, result);

//     if(arr[left] < arr[right]){
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return result
// };

// console.log(containerWithMostWaterOptimal([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// const subArraySumsEqualK = (nums: number[], k: number) => {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];

//       if (sum === k) count++;
//     }
//   }
//   return count;
// };

// console.log(subArraySumsEqualK([1, 2, 3, 4, 5, 6, 7, 8], 6));

// const productMaxSubArr = (nums: number[]) => {
//   let maxProduct = 0
//   for(let i = 0; i<nums.length; i++){
//     let product = 1
//     for(let j = i; j<nums.length; j++){
//       product *= nums[j]
//     }
//     maxProduct = Math.max(product, maxProduct)
//   }
//   return maxProduct;
// }

// console.log(productMaxSubArr([1,2,-3,4,5,1,3]))

// const maxProductOptimal = (nums: number[]) => {
//   let maxProduct = nums[0];
//   let minProduct = nums[0];
//   let result = nums[0];

//   for(let i = 1; i<nums.length; i++){
//     const current = nums[i];

//     const tempMax = maxProduct;
//     maxProduct = Math.max(current, current * maxProduct, current * minProduct);
//     minProduct = Math.min(current, current * tempMax, current * minProduct);
//     result = Math.max(result, maxProduct);
//   }

//   return result;
// }

// console.log(maxProductOptimal([2,3,-2,4]))
// console.log(maxProductOptimal([2,3,-2,4,2]))

// const threeSum = (nums: number[]) => {
//   let n = nums.length;
//   const result: number[][] = [];
//   for(let i = 0; i< n -2; i++){

//     for(let j = i+1; j<n-1; j++){

//       for(let k = i+2; k<n; k++){
//         if(nums[i] + nums[j] + nums[k] === 0){
//           const triplet = [nums[i], nums[j], nums[k]].sort((a,b) => a-b);
//           console.log(triplet)
//           const exists = result.some(arr => arr[0] === triplet[0] && arr[1] === triplet[1] && arr[2] === triplet[2])
//           console.log(exists)
//           if(!exists){
//             result.push(triplet)
//           }
//         }
//       }
//     }
//   }

//   return result
// }

// console.log(threeSum([-1,0,1,2,-1,-4]))

// const threeSumBetter = (nums: number[]) => {
//   let result: number[][] = []
//   let n = nums.length;

//   for(let i = 0; i<n-2; i++){
//     const seen = new Set<number>();
//     for (let j = i+1; j<n-1; j++){
//       const required = -(nums[i] + nums[j]);
//       if(seen.has(required)){
//         const triplet = [nums[i], nums[j], required].sort((a,b) => a-b);
//         const key = triplet.join(',');

//         const exists = result.some(arr => arr.join(',') === key)
//         if(!exists){
//           result.push(triplet)
//         }
//       }
//       seen.add(nums[j])
//     }
//   }

//   return result
// }

// console.log(threeSumBetter([-1,0,1,2,-1,-4]))

// const threeSum = (nums: number[]) => {
//   let result: number[][] = [];
//   nums.sort((a, b) => a - b);
//   let n = nums.length;

//   for (let i = 0; i < n - 2; i++) {
//     if(i>0 && nums[i] === nums[i -1]) continue
//     let j = i + 1;
//     let k = n - 1;
//     while (j < k) {
//       const sum = nums[i] + nums[j] + nums[k];
//       if(sum === 0){
//         result.push([nums[i], nums[j], nums[k]]);

//         while(j<k && nums[j] === nums[j+1]) j++;
//         while(j<k && nums[k] === nums[k-1]) k--;
//         j++;
//         k--;
//       }else if(sum < 0){
//         j++;
//       }else{
//         k--;
//       }
//     }
//   }
//   return result;
// };
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// const binarySearch = (nums: number[], target: number) => {
//   let n = nums.length;
//   let left = 0;
//   let right = n - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return false
// };

// console.log(binarySearch([1,2,3,4,5],1))

// const rotateArr = (nums: number[], k: number) => {
//   let rotated: number[] = []
//   const n = nums.length;
//   k = k%n;

//   for(let i = 0; i<n; i++){
//     rotated[(i+k) % n] = nums[i]
//   }
//   return rotated;
// }

// console.log(rotateArr([1,2,3,4,5],3))

// const findMinSortedArr = (nums: number[]) => {
//   let left = 0;
//   let right = nums.length - 1;
//   if (nums[left] < nums[right]) return nums[left];

//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     if (nums[mid] > right) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return nums[left];
// };

// console.log(findMinSortedArr([3, 4, 5, 1, 2]));

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 7],
];

const markRow = (matrix: number[][], row: number, marker: number) => {
  let cols = matrix[0].length;
  console.log(cols);

  for (let i = 0; i < cols; i++) {
    matrix[row][i] = marker;
  }
  return matrix;
};

// console.log(markRow(matrix,2,1))

// const markCol = (matrix: number[][], col: number, marker: number) => {
//   let rows = matrix.length;
//   console.log(rows);

//   for (let i = 0; i < rows; i++) {
//     matrix[i][col] = marker;
//   }
//   return matrix;
// };
// console.log(markCol(matrix,2,0))

// const markRowAndCol = (
//   matrix: number[][],
//   row: number,
//   col: number,
//   marker: number,
// ) => {
//   markRow(matrix, row, marker);
//   markCol(matrix, col, marker);
//   return matrix;
// };
// console.log(markRowAndCol(matrix, 1, 1, 0));

// console.log(matrix);

// const setMatrixZeroes = (matrix: number[][]) => {
//   const rows = matrix.length;
//   const cols = matrix[0].length;

//   const copy: number[][] = [];

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col <= cols; col++) {
//       if (matrix[row][col] === 0) {
//         // copy.push(matrix[row][col]===0)
//       }
//     }
//   }
// };

// const setMatrixZeroesBrute = (matrix: number[][]) => {
//   const rows = matrix.length;
//   const cols = matrix[0].length;
//   let copy: number[][] = [];
//   for (let i = 0; i < rows; i++) {
//     copy[i] = [...matrix[i]];
//   }
//   console.log(copy);

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       if (matrix[row][col] === 0) {
//         for (let k = 0; k < cols; k++) {
//           copy[row][k] = 0;
//         }
//         for (let k = 0; k < rows; k++) {
//           copy[k][col] = 0;
//         }
//       }
//     }
//   }

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       matrix[row][col] = copy[row][col];
//     }
//   }
//   return matrix;
// };
// console.log(
//   setMatrixZeroesBrute([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ]),
// );

// const setMatrixZeroesBetter = (matrix: number[][]) => {
//   const rows = matrix.length;
//   const cols = matrix[0].length;

//   const rowZeroes: boolean[] = new Array(rows).fill(false);
//   const colZeroes: boolean[] = new Array(cols).fill(false);

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       if (matrix[row][col] === 0) {
//         rowZeroes[row] = true;
//         colZeroes[col] = true;
//       }
//     }
//   }
//   for (let row = 0; row < rows; row++) {
//     if (rowZeroes[row]) {
//       for (let col = 0; col < cols; col++) {
//         matrix[row][col] = 0;
//       }
//     }
//   }
//   for (let col = 0; col < cols; col++) {
//     if (colZeroes[col]) {
//       for (let row = 0; row < rows; row++) {
//         matrix[row][col] = 0;
//       }
//     }
//   }
//   console.log(rowZeroes, colZeroes);

//   return matrix;
// };

// console.log(
//   setMatrixZeroesBetter([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ]),
// );

// const longestConsecutiveBrute = (nums: number[]) => {
//   if (nums.length === 0) return 0;

//   nums.sort((a, b) => a - b);
//   let currentStreak = 1;
//   let longestStreak = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) continue;

//     if (nums[i] === nums[i - 1] + 1) {
//       currentStreak++;
//     } else {
//       longestStreak = Math.max(longestStreak, currentStreak);
//       currentStreak = 1;
//     }
//   }
//   longestStreak = Math.max(longestStreak, currentStreak);
//   return longestStreak;
// };

// console.log(longestConsecutiveBrute([100,4,200,1,2,3]))

const longestConsecutiveBetter = (nums: number[]) => {
  if (nums.length === 0) return 0;

  const set = new Set<number>(nums);
  let longestStreak = 0;

  for (const num of nums) {
    let current = num;
    let currentStreak = 1;

    while (set.has(current + 1)) {
      current++;
      currentStreak++;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
  }

  return longestStreak;
};

// console.log(longestConsecutiveBetter([100, 4, 200, 1, 2, 3]));

// const longestConsecutiveOptimal = (nums: number[]) => {
//   if (nums.length === 0) return 0;

//   const set = new Set<number>(nums);
//   let longestStreak = 0;

//   for (let num of set) {
//     if (!set.has(num - 1)) {
//       let curStreak = 1;
//       let curNum = num;

//       while (set.has(curNum + 1)) {
//         curStreak++;
//         curNum++;
//       }

//       longestStreak = Math.max(longestStreak, curStreak);
//     }
//   }

//   return longestStreak;
// };

// console.log(longestConsecutiveOptimal([100, 4, 200, 1, 2, 3]));

// const mergeIntervals = (interval1: number[], interval2: number[]) => {
//   const [start1, end1] = interval1;
//   const [start2, end2] = interval2;

//   if (start2 <= end1 && start1 <= end2) return true;
//   return false;
// };

// console.log(mergeIntervals([1, 3], [4, 6]));

function mergeTwoIntervals(interval1: number[], interval2: number[]) {
  const [start1, end1] = interval1;
  const [start2, end2] = interval2;

  return [Math.min(start1, start2), Math.max(end1, end2)];
}

// console.log(mergeTwoIntervals([1,3],[4,9]))

// const mergeTwoOverlappingIntervals = (intervals: number[][]) => {
//   intervals.sort((a, b) => a[0] - b[0]);
//   console.log(intervals);
//   intervals.forEach((interval) => {
//     const [start1, end1] = interval;
//     console.log(start1, end1);
//   });
// };

// console.log(mergeTwoOverlappingIntervals([[1,3],[8,10],[2,6]]))

// const mergeIntervals = (intervals: number[][]) => {
//   if (intervals.length === 0) return [];

//   intervals.sort((a, b) => a[0] - b[0]);

//   const mergedIntervals: number[][] = [];
//   mergedIntervals.push(intervals[0]);

//   for (let i = 1; i < intervals.length; i++) {
//     const [start, end] = intervals[i];
//     console.log(start, end);

//     const last = mergedIntervals[mergedIntervals.length - 1];
//     console.log(last[1]);
//     if (start <= last[1]) {
//       last[1] = Math.max(end, last[1]);
//     } else {
//       mergedIntervals.push(intervals[i]);
//     }
//   }
//   return mergedIntervals;
// };

// console.log(
//   mergeIntervals([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [11, 15],
//   ]),
// );

// const rotateImage = (matrix: number[][]) => {
//   const rows = matrix.length;
//   const cols = matrix[0].length;

//   for(let i = 0; i<rows; i++){
//     for(let j = i; j<cols; j++){
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
//     }
//   }

//   for(let i = 0; i<rows; i++){
//     matrix[i].reverse()
//   }
//   return matrix;
// }

// console.log(rotateImage([[1,2,3],[4,5,6],[7,8,9]]))

// const mergeInterval = (intervals: number[][]) => {
//   if (intervals.length === 0) return [];

//   intervals.sort((a, b) => a[0] - b[0]);
//   const mergedIntervals: number[][] = [];

//   mergedIntervals.push(intervals[0]);

//   for (let i = 1; i < intervals.length; i++) {
//     const [start2, end] = intervals[i];

//     const last = mergedIntervals[mergedIntervals.length - 1];

//     if (start2 < last[1]) {
//       last[1] = Math.max(last[1], end);
//     } else {
//       mergedIntervals.push(intervals[i]);
//     }
//   }
//   return mergedIntervals;
// };

// console.log(
//   mergeInterval([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [13, 15],
//   ]),
// );

// const checkValidCuts = (n: number, rectangle: number[][]) => {
//   const xCoordinates: number[][] = [];
//   const yCoordinates: number[][] = [];

//   for (let i = 0; i < rectangle.length; i++) {
//     const [x1, y1, x2, y2] = rectangle[i];
//     xCoordinates.push([x1, x2]);
//     yCoordinates.push([y1, y2]);
//   }
//   const mergedX = mergeInterval(xCoordinates);
//   const mergedY = mergeInterval(yCoordinates);

//   return mergedX.length >=3 || mergedY.length >=3;
// };
// console.log(
//   checkValidCuts(2, [
//     [1, 2, 3, 4],
//     [2, 3, 5, 7],
//   ]),
// );

