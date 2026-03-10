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

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
