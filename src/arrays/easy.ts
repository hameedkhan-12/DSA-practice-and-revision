// const containDup = (nums: number[]): boolean => {
//     const set = new Set<number>();
//     for(const num of nums) {
//         if(set.has(num)) return true;
//         set.add(num);
//         console.log(set)
//     }
//     return false
// }

// console.log(containDup([1,2,3,1]))

// const containDupBrute = (nums: number[]): boolean => {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] === nums[j]) return true;
//         }
//     }
//     return false
// }

// console.log(containDupBrute([1,2,3]))

// const largestElementInArr = (nums: number[]): number => {
//     let max = nums[0];
//     for(const num of nums){
//         if(num > max) max = num;
//     }
//     return max;
// }

// console.log(largestElementInArr([1,2,3,4,5]))

// const largestElementInArr2 = (nums: number[]): number => {
//     let max = nums[0];
//     for (let i = 1; i < nums.length; i++){
//         if(nums[i] > max ) max = nums[i];

//     }
//     return max
// }

// console.log(largestElementInArr2([1,2,3,4,5]))

// const largestElementInArr3 = (nums: number[]): number => {
//     return Math.max(...nums)
// }

// console.log(largestElementInArr3([1,2,3,4,5]))

// const largestElementInArr4 = (nums: number[]): number => {
//     const sortNums = nums.sort((a,b) => b - a);
//     return sortNums[0]
// }
// console.log(largestElementInArr4([1,2,3,4,5]))

// const secondLargestEleArr  = (nums: number[]): number => {
//     const sortNums = nums.sort((a,b) => b-a);
//     console.log(sortNums)
//     return sortNums[1];
// }
// console.log(secondLargestEleArr([1,2,3,4,5]))

// const secondLargestEleArr2 = (nums: number[]): number => {
//     let largest = nums[0];
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] > largest){
//             largest = nums[i];
//         }
//     }
//     let secondLargest = -1;
//     for(let i = 0; i<nums.length; i++) {
//         if(nums[i] > secondLargest && nums[i] < largest){
//             secondLargest = nums[i];
//         }
//     }
//     return secondLargest;
// }

// console.log(secondLargestEleArr2([1,2,3,4,5]))

// const secondLargestEleArr3 = (nums: number[]): number[] => {
//     let largest = nums[0];
//     let secondLargest = -1;
//     for(let i =0; i<nums.length; i++){
//         if(nums[i]>largest && largest>secondLargest){
//             largest = nums[i];
//             secondLargest = largest;
//         }
//         else if(nums[i] < largest && nums[i]>secondLargest){
//             secondLargest = nums[i];
//         }
//     }
//     console.log([largest,secondLargest])
//     return [largest,secondLargest]
// }

// const secondSmallestEleArr = (nums: number[]): number[] => {
//     let smallest = nums[0];
//     let secondSmallest = Infinity;
//     for(let i = 1; i<nums.length; i++){
//         if(nums[i]< smallest){
//             secondSmallest = smallest;
//             smallest = nums[i];
//         }
//         else if(nums[i] != smallest && nums[i]<secondSmallest){
//             secondSmallest = nums[i]
//         }
//     }
//     return [smallest, secondSmallest]
// }

// console.log(secondLargestEleArr3([12,3,2,3,7,3]))
// console.log(secondSmallestEleArr([1,2,3,2,21,2,0]))

// const isSorted = (nums: number[]): boolean => {
//     for (let i = 1; i<nums.length; i++){
//         if(nums[i] < nums[i-1]) return false
//     }
//     return true;
// }

// const removeDupFromSortedArr = (nums: number[]): number =>{
//     let i = 0;
//     for(let j = 1; j<nums.length; j++){
//         if(nums[i] != nums[j]){
//             nums[i+1] = nums[j];
//             i++;
//         }
//     }
//     return (i+1);
// }

// console.log(removeDupFromSortedArr([1,2,2,2,3,3,4]))

// const removeDupFromSortedArr1 = (nums: number[]): number => {
//     const unique = Array.from(new Set(nums))
//     console.log(unique);
//     for(let i = 0; i<unique.length; i++){
//         nums[i] = unique[i];
//     }
//     return unique.length;
// }

// console.log(removeDupFromSortedArr1([1,2,2,2,3,3,4]))

// const rotateArrayLeftByOnePlace = (nums: number[]): number[] => {
//   let temp = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     nums[i - 1] = nums[i];
//   }
//   nums[nums.length - 1] = temp;
//   return nums;
// };

// console.log(rotateArrayLeftByOnePlace([1, 2, 3, 4, 5]));

// const rotateArrayLeftByKPlaces = (nums: number[], k: number) => {
//   const n = nums.length;
//   if(n===0) return nums;
//   const temp: number[] = []

//   for (let i = 0; i<k; i++){
//     temp[i] = nums[i]
//   }
//   console.log(temp)
//   for (let j = k; j<n; j++){
//     nums[j- k] = nums[j]
//   }
//   console.log("NUMS HE",nums)
//   for(let u = 0; u<k; u++){
//     nums[n-k+u] = temp[u];
//   }
//   return nums
// }

// console.log(rotateArrayLeftByKPlaces([1,2,3,4,5], 4))

////////////////OPTIMAL APPROACH

// const rotateArrayLeftByKPlacesOpt = (nums: number[], k: number) => {
//   const n = nums.length;
//   if(n===0) return nums;

//   k = k % n;

//   const reverse = (nums: number[], start: number, end: number) => {
//     while (start< end) {
//       [nums[start], nums[end]] = [nums[end], nums[start]];
//       start++;
//       end--;
//     }
//   }
//   reverse(nums, 0, k-1);
//   console.log(nums, "!st rev")
//   reverse(nums,k, n-1);
//   console.log("2nd rev", nums)
//   reverse(nums, 0, n-1)

//   return nums;
// }

// console.log(rotateArrayLeftByKPlacesOpt([1,2,3,4,5],3))

// const rightArrowByKPlaces = (nums: number[], k: number) => {
//   const n = nums.length;
//   if(n===0) return nums;

//   k = k%n;
//   const temp: number[] = []
//   for(let i=0; i<k; i++){
//     temp[i] = nums[n- k + i]
//   }
//   console.log(temp)
//   console.log(nums)

//   for (let i=n-k-1; i>=0; i--){
//     nums[i + k] = nums[i]
//   }

//   console.log("NUMS2",nums)

//   for (let i = 0; i<k; i++){
//     nums[i] = temp[i]
//   }
//   return nums;
// }

// console.log(rightArrowByKPlaces([1,2,3,4,5],2))

// const rightArrowByKPlacesOpt = (nums: number[], k: number) => {
//   const n = nums.length
//   if(n===0) return nums;

//   k = k % n;

//   const reverse = (nums: number[], start: number, end: number) =>{
//     while(start<end){
//       [nums[start], nums[end]] = [nums[end], nums[start]]
//       start++;
//       end--
//     }
//   }

//   reverse(nums, 0, n-1)
//   reverse(nums, 0 ,k-1)
//   reverse(nums, k, n-1)

//   return nums
// }

// console.log(rightArrowByKPlacesOpt([1,2,3,4,5],2))

// const moveZerosToEnd = (nums: number[]) => {
//   let temp: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) temp.push(nums[i]);
//   }
//   for (let i = 0; i < temp.length; i++) {
//     nums[i] = temp[i];
//   }
//   for(let i = temp.length; i<nums.length; i++){
//     nums[i] = 0
//   }
//   return nums;
// };

// console.log(moveZerosToEnd([1, 2, 0, 3, 0, 5]));

// const zerosBetter = (nums: number[]) => {
//   let index = 0;
//   for(let i = 0; i<nums.length; i++) {
//     if(nums[i] !==0){
//       nums[index] = nums[i];
//       index++;
//     }
//   }
//   console.log(nums)
//   for(let i = index; i<nums.length; i++){
//     nums[i] = 0
//   }
//   return nums
// }

// console.log(zerosBetter([1,2,0,3,0,0,4]))

// const zerosOpt = (nums: number[]) => {
//   let j = 0;
//   for(let i = 0; i<nums.length; i++){
//     if(nums[i] !== 0){
//       [nums[i], nums[j]] = [nums[j], nums[i]]
//       console.log([nums[i]], nums[j])
//       j++
//     }
//   }
//   return nums;
// }

// console.log(zerosOpt([1,2,0,3,4,0,7]))

// const zerosOpt2 = (nums: number[]) => {
//   let j = -1;
//   for(let i = 0; i<nums.length; i++){
//     if(nums[i] === 0){
//       j = i
//       break;
//     }
//   }
//   console.log(j)
//   if(j === -1) return nums;

//   for(let i = j+1; i<nums.length; i++){
//     if(nums[i] !== 0){
//       [nums[i], nums[j]] = [nums[j], nums[i]]
//       j++
//     }
//   }
//   return nums
// }

// console.log(zerosOpt2([1,2,0,4,0,0,5]))

// const unionOptimal = (nums1: number[], nums2: number[]) => {
//   const a = nums1.length;
//   const b = nums2.length;
//   let i = 0;
//   let j = 0;
//   const union: number[] = []

//   while(i<a && j<b){
//     if(nums1[i]<nums2[j]){
//       if(union.length === 0 || union[union.length - 1] !== nums1[i]){
//         union.push(nums1[i])
//       }
//       i++
//     }
//     else if(nums2[j] < nums1[i]){
//       if(union.length === 0 || union[union.length - 1] !== nums2[j]){
//         union.push(nums2[j])
//       }
//       j++
//     }
//     else{
//       if(union.length === 0 || union[union.length-1] !== nums1[i] ){
//         union.push(nums1[i])
//       }
//       i++;
//       j++;
//     }
//   }
//   while(i<a){
//     if(union[union.length-1] !== nums1[i]){
//       union.push(nums1[i])
//     }
//     i++
//   }
//   while(j<b){
//     if(union[union.length-1] !== nums2[j]) union.push(nums2[j])
//       j++
//   }
//   return union;
// }

// console.log(unionOptimal([1,2,3,4],[1,4,5,6]))

// const unionBrute = (nums1: number[], nums2: number[]) =>{
//   const union: number[] = []

//   for (let i = 0; i< nums1.length; i++){
//     if(!union.includes(nums1[i])){
//       union.push(nums1[i])
//     }
//   }
//   for (let j = 0; j<nums2.length; j++){
//     if(!union.includes(nums2[j])){
//       union.push(nums2[j])
//     }
//   }
//   return union;
// }

// console.log(unionBrute([1,2,3,4],[1,4,5,6]))

// const intersectionOptimal = (nums1: number[], nums2: number[]) => {
//   let a = nums1.length;
//   let b = nums2.length;
//   let i = 0;
//   let j = 0;
//   const union: number[] = []

//   while(i<a && j<b){
//     if(nums1[i] < nums2[j]){
//       i++;
//     }
//     else if(nums2[j] < nums1[i]){
//       j++;
//     }
//     else{
//       if(union.length === 0 || union[union.length - 1] !== nums1[i]){
//         union.push(nums1[i])
//       }
//       i++;
//       j++;
//     }
//   }
//   return union;
// }
// console.log(intersectionOptimal([1,2,3,4],[1,4,5,6]))

// const missingNumber = (nums: number[]) => {
//   const n = nums.length;

//   for(let i = 0; i<n; i++){
//     if(!nums.includes(i)){
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(missingNumber([3,0,1]))

// const missingNumberBetter = (nums: number[]) => {
//   const n = nums.length;
//   const numbers = new Set(nums);
//   for(let i = 0; i<n; i++){
//     if(!numbers.has(i)){
//       return i;
//     }
//   }
// }
// console.log(missingNumberBetter([3,0,1]))

// const missingNumberOpt = (nums: number[]) => {
//   const n = nums.length;
//   let total = (n * (n+1))/2;
//   for(const num of nums){
//     total -= num;
//   }
//   return total
// }
// console.log(missingNumberOpt([3,0,1,2,5]))

// const missingNumberOpt2 = (nums: number[]) => {
//   const n = nums.length;

//   let total = (n * (n + 1)) /2;
//   const remNum = nums.reduce((acc,val) => acc+val, 0);
//   return total - remNum;
// }

// console.log(missingNumberOpt2([3,0,1,2,5]))

// const maxConsecutiveOne = (nums: number[]) => {
//   let maxCount = 0;
//   let curCount = 0;
//   for(let i = 0; i<nums.length; i++){
//     if(nums[i] === 1){
//       curCount++;
//     }
//     else{
//       if(curCount>maxCount) maxCount = curCount;
//       curCount = 0;
//     }
//   }
//   if(curCount > maxCount) maxCount = curCount;
//   return maxCount;
// }

// console.log(maxConsecutiveOne([1,1,0,1,1,1]))

// const singleNumber = (nums: number[]) => {
//   for(let i = 0; i<nums.length; i++){
//     let count = 0;
//     for(let j = 0; j<nums.length; j++){
//       if(nums[i] === nums[j]) count++;
//     }
//     if(count === 1) return nums[i];
//   }
//   return -1
// }

// console.log(singleNumber([2,2,1,1,2,3]))

// const singleNumberOpt = (nums: number[]) => {
//   let xor = 0;
//   for (let num of nums){
//     xor ^= num;
//   }
//   return xor;
// }

// console.log(singleNumberOpt([2,2,1,1,2,3]))

// const singleNumberBetter = (nums: number[]) => {
//   const map = new Map<number, number>();

//   for(const num of nums){
//     map.set(num, (map.get(num) || 0) + 1);
//   }
//   for (const [key,val] of map){
//     if(val === 1) return key;
//   }
//   return -1;
// }

// console.log(singleNumberBetter([2,2,1,1,2,3]))

// const longestSubArrWithSumKBrute = (nums: number[], k: number) => {
//   const n = nums.length;
//   let maxLen = 0

//   for(let i = 0; i<n; i++){
//     let sum = 0;
//     for(let j = i; j<n; j++){
//       sum+= nums[j];
//       if(sum === k) {
//         maxLen = Math.max(maxLen, j-i + 1)
//       }
//     }
//   }
//   return maxLen;
// }

// console.log(longestSubArrWithSumKBrute([1,1,2,3,2,1,1,1,1,2,3,4],6))

// const longestSubArrWithSumKOpt = (nums: number[], k: number) => {
//   let left = 0;
//   let maxLen = 0;
//   let sum = 0;

//   for (let right = 0; right< nums.length; right++){
//     sum += nums[right];
//     console.log(sum)
//     while(sum > k){
//       sum -=nums[left];
//       console.log(sum)
//       left++;
//     }
//     if(sum === k){
//       maxLen = Math.max(maxLen,right - left + 1)
//     }
//   }
//   return maxLen;
// }

// console.log(longestSubArrWithSumKOpt([1,1,2,3,4,5,1,1,2,1,1,1,1], 6))

// const twoSumBrute = (nums: number[], target: number) => {
//   for (let i = 0; i<nums.length - 1; i++){
//     for(let j = i+1; j<nums.length; j++){
//       if(nums[i] + nums[j] === target){
//         return [i,j];
//       }
//     }
//   }
//   return null
// }
// console.log(twoSumBrute([1,2,3,4,5],7))

// function onePassHashTwoSum(nums: number[], target: number): [number, number] | null {
//   const map = new Map<number, number>(); // value -> index
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       // complement index was seen earlier
//       return [map.get(complement) as number, i];
//     }
//     map.set(nums[i], i);
//   }
//   return null;
// }
// console.log(onePassHashTwoSum([1,2,3,4,5],7))

// const mergeSort = (arr: number[]): number[] => {
//   if (arr.length <= 1) return arr;
//   const mid = Math.floor(arr.length / 2);
//   const leftArr = arr.slice(0, mid);
//   const rightArr = arr.slice(mid);

//   const sortedLeft = mergeSort(leftArr);
//   const sortedRight = mergeSort(rightArr);

//   return merge(sortedLeft, sortedRight);
// };

// const merge = (sortedLeft: number[], sortedRight: number[]) => {
//   const result = [];
//   let i = 0;
//   let j = 0;
//   while (i < sortedLeft.length && j < sortedRight.length) {
//     if (sortedLeft[i] <= sortedRight[j]) {
//       result.push(sortedLeft[i]);
//       i++;
//     } else {
//       result.push(sortedRight[j]);
//       j++;
//     }
//   }

//   while(i<sortedLeft.length){
//     result.push(sortedLeft[i])
//     i++;
//   }
//   while(j<sortedRight.length){
//     result.push(sortedRight[j])
//     j++
//   }
//   return result;
// };

// console.log(mergeSort([1,4,6,3,4,9,11,8]))

// const mergeSortInPlace = (arr: number[], low: number = 0, high: number = arr.length-1) => {
//     if(low>=high) return;

//     const mid = Math.floor((low + high) /2)

//     mergeSortInPlace(arr, low, mid)
//     mergeSortInPlace(arr, mid+1, high)

//     mergeInPlace(arr, low, mid, high)
//     return arr;
// }

// const mergeInPlace =(arr: number[], low: number, mid: number, high: number) => {
//     const left = arr.slice(low, mid+1);
//     const right = arr.slice(mid+1, high+1);

//     let i =0;
//     let j= 0;
//     let k = low;

//     while(i<left.length && j<right.length){
//         if(left[i]<=right[j]){
//             arr[k] = left[i];
//             i++;
//             k++;
//         }
//         else{
//             arr[k] = right[j];
//             j++;
//             k++;
//         }
//     }
//     while(i<left.length){
//         arr[k] = left[i];
//         i++;
//         k++;
//     }
//     while(j<right.length){
//         arr[k] = right[j];
//         j++;
//         k++;
//     }
// }

// console.log(mergeSortInPlace([1,4,6,3,4,9,11,8]))

// const majEle = (arr: number[]) => {
//     const n = arr.length;
//     for(let i = 0; i<n; i++ ){
//         let count = 0;
//         for(let j = 0; j<n; j++){
//             if(arr[i] == arr[j]) count++
//         }
//         if(count > n/2) return arr[i]
//     }
//     return -1
// }

// console.log(majEle([1,2,3,4,1,2,1,1,1]))

// function majorityElement(nums: number[]) {
//   let candidate = 0, count = 0;

//   for (let num of nums) {
//     console.log(candidate, count)
//     if (count === 0) candidate = num;
//     count += num === candidate ? 1 : -1;
//   }

//   // Verify
//   let freq = 0;
//   for (let num of nums) {
//     if (num === candidate) freq++;
//   }

//   return freq > nums.length / 2 ? candidate : -1;
// }

// console.log(majorityElement([1,2,3,1,1]))

// const maxSubArrSum = (nums: number[]) => {
//   let maxSum = 0;
//   for(let i = 0; i<nums.length; i++){
//     for(let j = i; j<nums.length; j++){
//       let curSum = 0;
//       for(let k = i; k<=j; k++){
//         curSum +=nums[k]
//       }
//       maxSum = Math.max(maxSum, curSum)
//     }
//   }
//   return maxSum;
// }

// console.log(maxSubArrSum([2,-1,2,3]))

// const maxSubArrSumOpt = (arr: number[]) => {
//   let maxSum = 0;
//   let curSum = 0;

//   for(let i=0; i<arr.length; i++){
//     curSum += arr[i]

//     maxSum = Math.max(maxSum,curSum)

//     if(curSum<0){
//       curSum = 0
//     }
//   }
//   return maxSum;
// }

// console.log(maxSubArrSumOpt([3,-4,5,4,-1,7,-8]))

// const bestTimeToSellAndBuy = (prices: number[]) => {
//   let maxProfit = 0
//   let buy = prices[0]
//   for(let i = 0; i<prices.length; i++){
//     for(let j = i+1; j<prices.length; j++){
//       maxProfit = Math.max(maxProfit, prices[j] - prices[i])
//     }
//   }
//   return maxProfit;
// }

// console.log(bestTimeToSellAndBuy([7,1,3,4,5]))

// const longestConsecutiveBrute = (nums: number[]) => {
//   let maxCount = 0;
//   for(let i = 0; i<nums.length; i++){
//     let current = nums[i]
//     let count = 1;
//     while(nums.includes(current + 1)){
//       current++;
//       count++;
//     }
//     maxCount = Math.max(maxCount, count)
//   }
//   return maxCount
// }

// console.log(longestConsecutiveBrute([1,2,3,4,5,7,8,9,10,11,12]))

// const longestConsecutiveBetter = (nums: number[]) => {
//   if(nums.length === 0) return;

//   const sortedArr = nums.sort((a,b) => a - b)

//   let maxCount = 1;
//   let count = 1;

//   for(let i = 0; i<sortedArr.length; i++){
//     if(nums[i] === nums[i-1]) continue;
//     if(nums[i] === nums[i - 1] + 1){
//       count++
//     } else{
//       maxCount = Math.max(maxCount, count)
//       count = 1;
//     }
//   }
//   return Math.max(maxCount,count);
// }

// console.log(longestConsecutiveBetter([1,2,3,4,5,7,8,9,10,11,12]))

// const longestConsecutiveOptimal = (nums: number[]) => {
//   const set = new Set(nums)
//   let longest = 0;

//   for(let num of set){
//     if(!set.has(num - 1)){
//       let current = num;
//       let length = 1;
//       while(set.has(current + 1)){
//         length++;
//         current++;
//       }
//       longest = Math.max(length, longest)
//     }
//   }
//   return longest;
// }

// console.log(longestConsecutiveOptimal([1,2,3,4,5,8,8]))

// const rotateBrute = (matrix: number[][]) => {
//   const n = matrix.length;
//   const rotatedArr = Array.from({ length: n}, () => Array(n).fill(0));
//   console.log(rotatedArr)
//   for(let i = 0; i<n; i++){
//     for(let j = 0; j<n; j++){
//       rotatedArr[j][n-1-i] = matrix[i][j];
//     }
//   }
//   return rotatedArr
// }

// console.log(rotateBrute([[1,2,3],[4,5,6],[7,8,9]]))

// const rotateOptimal = (matrix: number[][]): void => {
//   const n = matrix.length;
//   for(let i = 0; i<n; i++){
//     for(let j = i +1; j<n; j++){
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
//     }
//   }
//   console.log(matrix)

//   for(let i = 0; i<n; i++){
//     matrix[i].reverse()
//   }
//   console.log(matrix)
// }

// rotateOptimal([[1,2,3],[4,5,6],[7,8,9]])

const twoSum = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};
console.log(twoSum([1, 2, 3], 5));

const reverseStr = (str: string): string => {
  let arr = str.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join('');
};

console.log(reverseStr('hello'));
