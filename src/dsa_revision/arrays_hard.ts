// const trappingRainWater = (heights: number[]) => {
//   let water = 0;
//   for (let i = 0; i < heights.length; i++) {
//     let leftMax = 0;
//     let rightMax = 0;
//     for (let j = 0; j <= i; j++) {
//       leftMax = Math.max(leftMax, heights[j]);
//     }
//     for (let k = i; k < heights.length; k++) {
//       rightMax = Math.max(rightMax, heights[k]);
//     }

//     water += Math.min(leftMax, rightMax) - heights[i];
//   }
//   return water;
// };

// console.log(trappingRainWater([4, 2, 0, 3, 2, 5]));

// const trappingRainWaterBetter = (height: number[]) => {
//   const n = height.length;
//   if (n === 0) return 0;

//   let leftMax = new Array(n);
//   let rightMax = new Array(n);
//   leftMax[0] = height[0];

//   for (let i = 1; i < n; i++) {
//     leftMax[i] = Math.max(leftMax[i - 1], height[i]);
//   }
//   rightMax[n - 1] = height[n - 1];
//   for (let i = n - 2; i >= 0; i--) {
//     rightMax[i] = Math.max(rightMax[i + 1], height[i]);
//   }

//   let total = 0;
//   for(let i = 0; i<n; i++){
//     total += Math.min(leftMax[i],rightMax[i]) - height[i]
//   }
//   return total;
// };

// console.log(trappingRainWaterBetter([4,2,0,3,2,5]))

const firstPositive = (nums: number[]) => {
  let n = nums.length;
  for (let i = 1; i <= n + 1; i++) {
    let found = false;
    for (let num of nums) {
      if (num === i) {
        found = true;
        break;
      }
    }
    if (!found) return i;
  }
  return n + 1;
};

// console.log(firstPositive([4, 3, -1, 1]));

const firstPositiveBetter = (nums: number[]): number => {
  const n = nums.length;
  const hash = new Set(nums);
  for (let i = 1; i <= n + 1; i++) {
    if (!hash.has(i)) return i;
  }
  return n + 1;
};

// console.log(firstPositiveBetter([4, 3, -1, 1]));

const firstPositiveOptimal = (nums: number[]): number => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[nums[i] - 1] !== nums[i] && nums[i] <= n) {
      const correctIndex = nums[i] - 1;

      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return n + 1;
};

console.log(firstPositiveOptimal([4, 3, -1, 1]));
