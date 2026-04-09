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

const squareOfSortedArr = (arr: number[]) => {
  const n = arr.length;
  let result = new Array(n)
  let left = 0;
  let right = n-1;
  let place = n-1;

  while (left <= right){
    const leftSquare = arr[left] * arr[right];
    const rightSquare = arr[right] * arr[right];

    if(leftSquare > rightSquare){
      result[place] = leftSquare;
      left++;
    }else{
      result[place] = rightSquare;
      right--
    }
    place--;
  }

  return result;
};
console.log(squareOfSortedArr([-4, -1, 0, 3, 10]));

