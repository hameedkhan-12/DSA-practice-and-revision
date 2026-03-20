// const reverseString = (s: string[]) => {
//   const stack: string[] = [];

//   for (const char of s) {
//     console.log(char);
//     stack.push(char);
//   }
//   console.log(stack);

//   for (let i = 0; i < stack.length; i++) {
//     s[i] = stack.pop()!;
//   }
//   console.log(s)
// };

// reverseString(["h", "e", "l", "l", "o"]);

// const reverseString = (s: string[]) => {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     [s[left], s[right]] = [s[right], s[left]];
//     left++;
//     right--;
//   }
//   console.log(s);
// };
// console.log(reverseString(["h", "e", "l", "l", "o"]));

// const insertAtBottom = (nums: number[], num: number) => {
//   let stack: number[] = [];
//   // for(let i = 0; i<nums.length; i++){
//   //     stack.push(nums[i])
//   // }
//   for (let num of nums) {
//     stack.push(num)
//   }
//   for(let i = 1;i<=stack.length; i++){
//     nums[0] = num;
//     nums[i] = stack[i-1]
//   }
//   console.log(stack);
//   console.log(nums)
// };

// insertAtBottom([2, 3, 1, 5, 6], 4);

// const insertAtBottomRecursive = (stack: number[], num: number) => {
//     if(stack.length === 0){
//         stack.push(num)
//     return;
//     };

//     let top = stack.pop();
//     insertAtBottomRecursive(stack, num)

//     stack.push(top!)
//     console.log(stack)
// }

// insertAtBottomRecursive(([4,2,1,3,6]), 9)

// const stringManipulation = (str: string[]) => {
//   const stack: string[] = [];
//   for (const char of str) {
//     if (stack[stack.length - 1] !== char) {
//       stack.push(char);
//     }
//    else stack.pop();
//   }
//   console.log(stack);
// };

// console.log(stringManipulation(["ab", "bc", "bc", "ab", "da"]));

const validParenthesis = (str: string[]) => {
  const stack: string[] = [];

  const map: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const key of str) {
    if (key in map) {
      if (!stack.length || stack[stack.length - 1] !== map[key]) {
        return false;
      }
      stack.pop();
    } else stack.push(key);
  }
  return stack.length === 0;
};

// console.log(validParenthesis(['(','{','}',')']))

const parenthesisToBeAdded = (str: string[]) => {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let count: number = 0;

  for (const char of str) {
    if (char in map) {
      if (stack.length && stack[stack.length - 1] === map[char]) {
        stack.pop();
      } else {
        count++;
      }
    } else stack.push(char);
  }

  return count + stack.length;
};

// console.log(parenthesisToBeAdded(['(', '(', '(']))

function nextGreaterElementBrute(arr: number[]): number[] {
  const n = arr.length;
  const result = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        result[i] = arr[j];
        break;
      }
    }
  }

  return result;
}
// console.log(nextGreaterElementBrute([4, 5, 2, 25, 7, 18]))

function nextGreaterElement(arr: number[]): number[] {
  const n = arr.length;
  const result = new Array(n).fill(-1);
  const stack: number[] = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }

  return result;
}
// console.log(nextGreaterElement([4, 5, 2, 25, 7, 18]))

const nextGreaterElement2 = (nums: number[]) => {
  const stack: number[] = [];
  const ans: number[] = new Array(nums.length - 1).fill(-1);

  for (let i = 2 * nums.length - 1; i >= 0; i--) {
    const cur = nums[i % nums.length];
    while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }

    if (i < nums.length && stack.length > 0) {
      ans[i] = stack[stack.length - 1];
    }

    stack.push(cur);
  }

  return ans;
};

// console.log(nextGreaterElement2([4,5,2,10,6,9]))

// const nextSmallerElement = (nums: number[]) => {
//   const n = nums.length;
//   const stack: number[] = []
//   const ans: number[] = new Array(n).fill(-1)

//   for(let i = n-1; i>=0; i--){
//     while(stack.length>0 && nums[i]<= stack[stack.length-1]){
//       stack.pop()
//     }
//     if(stack.length>0){
//       ans[i] = stack[stack.length-1]
//     }
//     stack.push(nums[i])
//   }
//   return ans;
// }

// console.log(nextSmallerElement([5,3,7,1,6,3]))

// const nextSmallerElementLeft = (nums: number[]) => {
//   const n = nums.length;
//   const stack: number[] = [];
//   const ans: number[] = new Array(n).fill(-1);

//   for (let i = 0; i < n; i++) {
//     while (stack.length > 0 && nums[i] <= stack[stack.length - 1]) {
//       stack.pop();
//     }

//     if (stack.length > 0) {
//       ans[i] = stack[stack.length - 1];
//     }

//     stack.push(nums[i]);
//   }

//   return ans;
// };
// console.log(nextSmallerElementLeft([5,3,7,1,6,3]))

const dailyTemperaturesBrute = (temperatures: number[]) => {
  const n = temperatures.length;
  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    let days: number;
    for (let j = i + 1; j < n; j++) {
      if (temperatures[i] < temperatures[j]) {
        days = j - i;
        stack.push(days);
        break;
      } else {
        stack.push;
      }
    }
  }
  return stack;
};

// console.log(dailyTemperaturesBrute([73, 74, 75, 71, 69, 72, 76, 73]));
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const ans: number[] = new Array(n).fill(0);
  const stack: number[] = [];

  for (let i = n - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }

    if (stack.length > 0) {
      ans[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  return ans;
}

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))

// const nextSmallerLeft = (arr: number[]) => {
//   const stack: number[] = []
//   const ans: number[] = new Array(arr.length).fill(-1)

//   for(let i = 0; i<arr.length; i++){
//     while(stack.length>0 && stack[stack.length-1]>=arr[i]){
//       stack.pop()
//     }
//     if(stack.length>0){
//       ans[i] = stack[stack.length-1];
//     }
//     stack.push(i)
//   }
//   return ans;
// }

// console.log(nextSmallerLeft([5,3,7,1,6,3]))
// const nextSmallerRight = (arr: number[]) => {
//   const stack: number[] = []
//   const ans: number[] = []

//   for(let i = )
// }

// const nextSmallerLeftIndex = (arr: number[]) => {
//   const n = arr.length;
//   const stack: number[] = [];

//   const left = new Array(n);

//   for (let i = 0; i < n; i++) {
//     while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
//       stack.pop();
//     }

//     left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];

//     stack.push(i);
//   }
//   return left;
// };

// const nextSmallerRightIndex = (arr: number[]) => {
//   const n = arr.length;
//   const stack: number[] = [];
//   const right = new Array(n);

//   for (let i = n - 1; i >= 0; i--) {
//     while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
//       stack.pop();
//     }

//     right[i] = stack.length === 0 ? n : stack[stack.length - 1];

//     stack.push(i);
//   }

//   return right;
// };

// const sumSubArrayMin = (arr: number[]): number => {
//   const leftValues = nextSmallerLeftIndex(arr);
//   const rightValues = nextSmallerRightIndex(arr);

//   let sum = 0;

//   const MOD = 1_000_000_007;

//   for (let i = 0; i < arr.length; i++) {
//     const left = i - leftValues[i];
//     const right = rightValues[i] - i;

//     const contribution = (arr[i] * left * right) % MOD;
//     sum = (sum + contribution) % MOD;
//   }

//   return sum;
// };

// console.log(sumSubArrayMin([3, 1, 2, 4]));

const nextSmallerLeftIndexRange = (arr: number[]) => {
  const n = arr.length;
  const stack: number[] = [];
  const left = new Array(n);

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }

  return left;
};
const nextSmallerRightIndexRange = (arr: number[]) => {
  const n = arr.length;
  const stack: number[] = [];
  const right = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }

    right[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }

  return right;
};
const nextGreaterLeftIndexRange = (arr: number[]) => {
  const n = arr.length;
  const stack: number[] = [];
  const left = new Array(n);

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }

  return left;
};

const nextGreaterRightIndexRange = (arr: number[]) => {
  const n = arr.length;
  const stack: number[] = [];
  const right = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }

    right[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }
  return right;
};

const sumOfSubarrayMinimum = (arr: number[]) => {
  const nextSmallerLeftValues = nextSmallerLeftIndexRange(arr);
  const nextSmallerRightValues = nextSmallerRightIndexRange(arr);

  let sum = 0;
  const MOD = 1_000_000_007;

  for (let i = 0; i < arr.length; i++) {
    const left = i - nextSmallerLeftValues[i];
    const right = nextSmallerRightValues[i] - i;

    const contribution = (arr[i] * left * right) % MOD;
    sum = (sum + contribution) % MOD;
  }

  return sum;
};

const sumOfSubarrayMaximum = (arr: number[]) => {
  const nextGreaterLeftValues = nextGreaterLeftIndexRange(arr);
  const nextGreaterRightValues = nextGreaterRightIndexRange(arr);

  let sum = 0;
  const MOD = 1_000_000_007;

  for (let i = 0; i < arr.length; i++) {
    const left = i - nextGreaterLeftValues[i];
    const right = nextGreaterRightValues[i] - i;

    const contribution = (arr[i] * left * right) % MOD;
    sum = (sum + contribution) % MOD;
  }
  return sum;
};
// const sumOfSubarrayRanges = (arr: number[]) => {
//   const MOD = 1_000_000_007;

//   const smallerValues = sumOfSubarrayMinimum(arr);
//   const greaterValues = sumOfSubarrayMaximum(arr);

//   return (greaterValues - smallerValues + MOD) % MOD;
// };

// console.log(sumOfSubarrayRanges([1, 4, 3, 2]));

// const asteroidCollisions = (asteroids: number[]) => {
//   const stack: number[] = [];
//   const n = asteroids.length;

//   for (let i = 0; i < n; i++) {
//     const current = asteroids[i];
//     let alive = true;
    
//     while (alive && stack[stack.length - 1] > 0 && current < 0) {
//       const top = stack[stack.length - 1];
//       if (Math.abs(top) < Math.abs(current)) {
//         stack.pop();
//         continue;
//       } else if (Math.abs(top) === Math.abs(current)) {
//         stack.pop();
//         alive = false;
//         break;
//       } else {
//         alive = false;
//         break;
//       }
//     }
//     if (alive) {
//       stack.push(current);
//     }
//   }
//   return stack;
// };
// console.log(asteroidCollisions([3, 5, -6, 2, -1, 4]));
