// function twoSum2(numbers: number[], target: number): number[] {
//   let left = 0;
//   let right = numbers.length - 1;

//   while (left < right) {
//     let sum = numbers[left] + numbers[right];
//     if (sum === target) {
//       return [left + 1, right + 1];
//     }
//     if (sum < target) {
//       left++;
//     }
//     if (sum > target) {
//       right--;
//     }
//   }

//   return [];
// }

// console.log(twoSum2([2, 3, 4], 6));

// function isAlphaNumeric(char: string): boolean {
//   return /^[a-z0-9]$/i.test(char);
// }
// function isPalindrome(s: string): boolean {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     while (left < right && !isAlphaNumeric(s[left])) {
//       left++;
//     }
//     while (left < right && !isAlphaNumeric(s[right])) {
//       right--;
//     }

//     if (s[left].toLowerCase() !== s[right].toLowerCase()) {
//       return false;
//     }

//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// const mergeSortedArray = (
//   nums1: number[],
//   m: number,
//   nums2: number[],
//   n: number,
// ): void => {
//   let i = m - 1;
//   let j = n - 1;
//   let k = m + n - 1;

//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//       k--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//       k--;
//     }
//     console.log(nums1);
//   }
//   while (j >= 0) {
//     nums1[k] = nums2[j];
//     j--;
//     k--;
//     console.log(nums1);
//   }
//   console.log(nums1);
// };

// console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// const removeElement = (nums: number[], val: number) => {
//   let left = 0;
//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] != val) {
//       nums[left] = nums[right];
//       left++;
//       console.log(nums);
//     }
//   }
//   return left;
// };

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2],2));

// const squareOfSortedArr = (arr: number[]) => {
//   const n = arr.length;
//   let result = new Array(n)
//   let left = 0;
//   let right = n-1;
//   let place = n-1;

//   while (left <= right){
//     const leftSquare = arr[left] * arr[right];
//     const rightSquare = arr[right] * arr[right];

//     if(leftSquare > rightSquare){
//       result[place] = leftSquare;
//       left++;
//     }else{
//       result[place] = rightSquare;
//       right--
//     }
//     place--;
//   }

//   return result;
// };
// console.log(squareOfSortedArr([-4, -1, 0, 3, 10]));

// const reverseVowels = (str: string) => {
//   const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
//   const arr = str.split("");
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     while (left < right && !vowels.has(arr[left])) {
//       left++;
//     }
//     while (left < right && !vowels.has(arr[right])) {
//       right--;
//     }
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }

//   return arr.join("");
// };

// function removeDuplicates(nums: number[]): number {
//     let k = 0;

//     for(let i=0;i<nums.length;i++){
//         if(k<2 || nums[i] !== nums[k-2]){
//             nums[k] = nums[i]
//             k++
//         }
//     }
//     return k
// };

// console.log(removeDuplicates([1,1,1,2,2,3]))

// const minSizeArrLength = (nums: number[], target: number) =>{
//   let left = 0;
//   let right = nums.length-1;
//   let sum = 0
//   let k = 0;
//   while(left<right){
//     sum = nums[left] + nums[right];
//     if(sum<target) {
//       left++;
//       k++
//     }
//     if(sum>target){
//       right--;
//       k++
//     }
//     if(sum === target) return [left+1, right+1, k]
//   }
//   return sum
// }

// console.log(minSizeArrLength([2,3,1,2,4,3], 7))

// const maxScore = (cardPoints: number[], k: number) => {
//   let lSum = 0;
//   let rSum = 0;
//   let maxSum = 0;
//   for (let i = 0; i < k; i++) {
//     lSum += cardPoints[i]
//     console.log("LEft SUMMMMMMMMMM", lSum)
//     maxSum = lSum;
//   }
//   let rightIndex = cardPoints.length - 1;
//   for (let j = k - 1; j >= 0; j--) {
//     lSum = lSum - cardPoints[j];
//     rSum = rSum + cardPoints[rightIndex];
//     rightIndex--;
//     maxSum = Math.max(maxSum, lSum+rSum)
//     console.log("Left SUm", lSum);
//     console.log("MAX SUMmmmmm", maxSum)
//   }
// };

// console.log(maxScore([6, 2, 3, 4, 7, 2, 1, 7, 1], 4));

// function lengthOfLongestSubstringOptimal(s: string): number {
//     let map = new Map<string, number>();
//     let left = 0;
//     let maxLen = 0;

//     for (let right = 0; right < s.length; right++) {
//         if (map.has(s[right])) {
//             left = Math.max(left, map.get(s[right])! + 1);
//         }

//         map.set(s[right], right);
//         maxLen = Math.max(maxLen, right - left + 1);
//     }

//     return maxLen;
// }

// console.log(lengthOfLongestSubstringOptimal("abcabcbb"));

// const maxConsOnes = (nums: number[], k: number) => {
//   let left = 0;
//   let maxLen = 0;
//   let zeroes = 0;

//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] === 0) zeroes++;

//     while (zeroes > k) {
//       if (nums[left] === 0) zeroes--;
//       left++;
//     }

//     maxLen = Math.max(maxLen, right - left + 1);
//   }
//   return maxLen;
// };

// console.log(maxConsOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

function findMaxConsecutiveOnes(nums: number[]): number {
    let count = 0;
    let maxLen = 0;

    for(let right = 0; right<nums.length; right++){
        if(nums[right] === 1){
           count++;
           maxLen = Math.max(maxLen, count)
        }
        else {
          count = 0
        }
    }
    return maxLen;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))