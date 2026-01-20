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

const bestTimeToSellAndBuyOpt = (prices: number[]) => {
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (left < right) {
    if (prices[right] > prices[left]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};


