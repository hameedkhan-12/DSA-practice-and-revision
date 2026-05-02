// const printingSubArrays = (arr: number[]) => {
//     const n = arr.length;

//     for(let i = 0; i<n; i++){
//         console.log(arr[i])

//         for(let j = i+1; j<n; j++){
//             console.log(arr[i], arr[j])
//             break;

//         }
//     }
// }

// console.log(printingSubArrays([1,2,3,4,5]))

// const printSubArrays = (arr: number[]) => {
//     const n = arr.length;

//     for (let len = 1; len <= n; len++) {
//         for (let i = 0; i <= n - len; i++) {
//             const subArray = [];

//             for (let k = i; k < i + len; k++) {
//                 subArray.push(arr[k]);
//             }

//             console.log(subArray);
//         }
//     }
// };

// printSubArrays([1,2,3,4,5]);

// const printingSubArray = (arr: number[]) => {
//     const n = arr.length;

//     for(let i = 0; i<n; i++){
//         let subArr: number[] = [];

//         for(let j = i; j<n; j++){
//             subArr.push(arr[j]);
//             console.log(subArr)
//         }
//     }
// }

// printingSubArray([1,2,3,4,5])

// const longSubstringWithKChars = (s: string, k: number) => {
//   let map = new Map<string, number>();
//   let left = 0;
//   let maxLen = 0;

//   for (let right = 0; right < s.length; right++) {
//     map.set(s[right], (map.get(s[right])! || 0) + 1);

//     if (map.size > k) {
//       map.set(s[left], map.get(s[left])! - 1);
//       if (map.get(s[left]) === 0) {
//         map.delete(s[left]);
//       }
//       left++;
//     }
//     maxLen = Math.max(maxLen, right - left + 1);
//   }
//   return maxLen;
// };

// console.log(longSubstringWithKChars("abcaabbbccd", 2));

const numberOfSubstringsContainingAllChars = (s: string) => {
  let left = 0;
  let map = new Map<string, number>();
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right])! || 0) + 1);

    while (map.size === 3) {
      map.set(s[left], map.get(s[left])! - 1);

      if (map.get(s[left]) === 0) {
        map.delete(s[left]);
      }
      maxLen += s.length - right;
      left++;
    }
    // maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

console.log(numberOfSubstringsContainingAllChars("abcabc"));
