///////////////////// TWO SUM ///////////////////////

//Brute Approach

// const twoSum = (arr: number[], target: number) => {
//     for (let i = 0; i<arr.length; i++){
//         for(let j = 0; j< arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 return [i, j];
//             }
//         }
//     }
//     return -1
// }

// console.log(twoSum([1,2,3,5,8], 7))

// const twoSumBetter = (arr: number[], target: number) => {
//     const map = new Map<number, number>();

//     for(let i = 0; i<arr.length; i++){
//         map.set(arr[i], i)
//     }
//     for(let i = 0; i<arr.length; i++){
//         const complement = target - arr[i];
//         if(map.has(complement) && map.get(complement) !== i) return [i, map.get(complement)]
//     }
//     return []
// }

// console.log(twoSumBetter([1,2,3,5,8], 7))

// const twoSumOpt = (arr: number[], target: number) => {
//     let left = 0;
//     let right = arr.length - 1;

//     while(left < right){
//         const sum = arr[left] + arr[right];
//         if(sum === target) return [left, right];
//         else if(sum < target) left++;
//         else right--;
//     }
//     return []
// }

// console.log(twoSumOpt([1,2,3,5,8], 7))

// const bestTimeToSellAndBuy = (arr: number[]) => {
//   let maxProfit = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let profit = 0;
//     for (let j = i + 1; j < arr.length; j++) {
//       profit = arr[j] - arr[i];
//       maxProfit = Math.max(maxProfit, profit);
//     }
//   }
//   return maxProfit
// };

// console.log(bestTimeToSellAndBuy([7, 1, 5, 3, 6, 4]));

// const bestTimeToSellAndBuyBetter = (prices: number[]) => {
//     let minPrice = Infinity;
//     let maxProfit = 0;

//     for(let price of prices){
//         if(price < minPrice){
//             minPrice = price
//         }
//         else{
//             maxProfit = Math.max(maxProfit, price-minPrice)
//         }
//     }
//     return maxProfit;
// }
// console.log(bestTimeToSellAndBuyBetter([7, 1, 5, 3, 6, 4]))

// const bestTimeToSellAndBuyOpt = (prices: number[]) => {
//   let left = 0;
//   let right = 1;
//   let maxProfit = 0;
//   while (left < right) {
//     if (prices[right] > prices[left]) {
//       const profit = prices[right] - prices[left];
//       maxProfit = Math.max(maxProfit, profit);
//     } else {
//       left = right;
//     }
//     right++;
//   }
//   return maxProfit;
// };

// const containsDup = (nums: number[]) => {
//   for (let i = 0; i< nums.length; i++){
//     for(let j = i +1; j<nums.length; j++){
//       if(nums[i] === nums[j]) return true;
//     }
//   }
// }

// console.log(containsDup([1,2,3,1]))

// const containsDuplBetter = (nums: number[]) => {
//   const map = new Map<number, number>();
//   for(let num of nums){
//     const freq = map.set(num, (map.get(num) || 0) + 1);
//     if(freq.get(num)! > 1) return true
//   }
//   return false
// };

// console.log(containsDuplBetter([1,2,3]))

// const containsDublOpt = (nums: number[]) => {
//   const seen = new Set<number>();
//   for(let num of nums){
//     if(seen.has(num)) return true;
//     seen.add(num);
//   }
//   return false
// }

// console.log(containsDublOpt([1,2,3,1]))

// const maxSubArrSum = (arr: number[]) => {
//     let maxSum = -Infinity;
//     for(let i=0; i<arr.length; i++){
//         let curSum = 0;
//         for(let j = i; j<arr.length; j++){
//             curSum+= arr[j]
//         }
//         maxSum = Math.max(curSum, maxSum)
//     }

//     return maxSum;
// }

// console.log(maxSubArrSum([1,5,-3,-4,3,7,1,-2,3]))

// const maxSubArrSumOpt = (nums: number[]) => {
//   let maxSum = nums[0];
//   let curSum = 0;
//   for (let num of nums) {
//     curSum += num;
//     maxSum = Math.max(maxSum, curSum);

//     if (curSum < 0) {
//       curSum = 0;
//     }
//   }
//   return maxSum;
// };
// console.log(maxSubArrSumOpt([1, 5, -3, -4, 3, 7, 1, -2, 3, 1]));
// console.log(maxSubArrSumOpt([1, 2, 3, 4]));

// let i = 0;
// let j = 2
// let nums: number[] = [10,20,30,40];
// [nums[i], nums[j]] = [nums[j], nums[i]]

// console.log(nums)

// const removeDuplicates = (nums: number[]): number => {
//   let left = 0;
//   for (let right = 1; right < nums.length; right++) {
//     if (nums[right] !== nums[left]) {
//       left++;
//       nums[left] = nums[right];
//     }
//   }

//   return left + 1;
// };

// console.log(removeDuplicates([1,2,2,3,5,5,7]))

// const plusOne = (nums: number[]): number[] => {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] < 9) {
//       nums[i]++;
//       return nums;
//     }
//     nums[i] = 0;
//   }
//   nums.unshift(1);

//   return nums;
// };
// console.log(plusOne([0, 9, 9]));

// const intersectionOfTwoArrays = (nums1: number[], nums2: number[]): number[] => {
//   let result: number[] = [];
//   for(let i = 0; i<nums1.length; i++){
//     for(let j=0; j<nums2.length; j++){
//       if(nums1[i] === nums2[j] && !result.includes(nums1[i])){
//         result.push(nums1[i]);
//       }
//     }
//   }
//   return result;
// }
// console.log(intersectionOfTwoArrays([1,2,3,4,5], [3,4,5,6,7]))

// const intersectionOfTwoArraysOpt = (nums1: number[], nums2: number[]): number[] => {
//   let result: number[] = [];
//   let i = 0;
//   let j = 0;
//   while(i<nums1.length && j<nums2.length){
//     if(nums1[i] === nums2[j] && !result.includes(nums1[i])){
//       result.push(nums1[i]);
//       i++;
//       j++;
//     }
//     else if(nums1[i] < nums2[j]){
//       i++;
//     }
//     else{
//       j++;
//     }
//   }
//   return result;
// }
// console.log(intersectionOfTwoArraysOpt([1,2,3,4,5], [3,4,5,6,7]))

// const unionOfTwoSortedArrays = (arr1: number[], arr2: number[]) => {
//   const result: number[] = []
//   for(let i = 0; i<arr1.length; i++){
//     for(let j = 0; j<arr2.length; j++){
//       if(arr1[i]<arr2[j] && !result.includes(arr1[i])){
//         result.push(arr1[i])
//       }else{
//         result.push(arr1[j])
//       }
//     }
//   }
//   return result
// // }
// const unionOfTwoSortedArrays = (arr1: number[], arr2: number[]) => {
//   let i = 0;
//   let j = 0;
//   let result: number[] = [];

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j] && result[result.length - 1] !== arr1[i]) {
//       result.push(arr1[i]);
//       i++;
//     } else if (arr1[i] === arr2[j] && result[result.length - 1] !== arr1[i]) {
//       result.push(arr1[i]);
//       i++;
//       j++;
//     } else {
//       if (result[result.length - 1] !== arr2[j]) {
//         result.push(arr2[j]);
//         j++;
//       }
//     }
//   }
//   while (i < arr1.length && result[result.length - 1] !== arr1[i]) {
//     result.push(arr1[i]);
//   }
//   while (j < arr2.length && result[result.length - 1] !== arr2[j]) {
//     result.push(arr2[j]);
//   }
//   return result;
// };
// console.log(unionOfTwoSortedArrays([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// const runningSum = (arr: number[]): number[] => {
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] += arr[i - 1];
//   }
//   return arr;
// }

// console.log(runningSum([1, 2, 3, 4]))

// const runningSumBrute = (arr: number[]): number[] => {
//   const result: number[] = [];
//   for(let i = 0; i<arr.length; i++){
//     let sum = 0;
//     for(let j = 0; j<=i; j++){
//       sum += arr[j]
//     }
//     result.push(sum)
//   }
//   return result
// }

// console.log(runningSumBrute([1, 2, 3, 4]))

// const majorityElementBrute = (arr: number[]) => {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = 0; j < n; j++) {
//       if (arr[i] === arr[j]) count++;
//     }
//     if (count > n / 2) return arr[i];
//   }
//   return -1;
// };

// console.log(majorityElementBrute([1, 2, 2, 3, 4, 5, 2, 2, 2]));


// const majorityElementBetter = (arr: number[]) =>{
//   const map = new Map<number, number>()
//   let n = arr.length;
//   for(let i = 0; i<arr.length; i++){
//     if(map.has(arr[i])){
//       map.set(arr[i], map.get(arr[i])! + 1)
//     }
//     else{
//       map.set(arr[i], 1)
//     }
//     if(map.get(arr[i])! > n/2) return arr[i]
//   }
//   return -1
// }

// console.log(majorityElementBetter([1, 2, 2, 3, 4, 5, 2, 2, 2]))

const majorityElementOpt = (arr: number[]): number => {
  let count = 0;
  let candidate = 0;
  let n = arr.length;

  for(let num of arr){
    if(count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  let freq = 0;
  for(let num of arr){
    if(num === candidate) freq++;
  }
  return freq > n/2 ? candidate : -1
}

console.log(majorityElementOpt([1, 2, 2, 3, 4, 5, 2, 2, 2]))