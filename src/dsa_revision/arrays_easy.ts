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

const removeDuplicates = (nums: number[]): number => {
  let left = 0;
  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[left]) {
      left++;
      nums[left] = nums[right];
    }
  }

  return left + 1;
};

console.log(removeDuplicates([1,2,2,3,5,5,7]))