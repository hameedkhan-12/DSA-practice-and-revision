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

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];  
  nums.sort((a, b) => a - b);
  const n = nums.length;
    for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    
    let left = i + 1;     
    let right = n - 1;   
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        
        left++;
        right--;
        
      } else if (sum < 0) {
        left++;
        
      } else {
        right--;
      }
    }
  }
  
  return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]))