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

const insertAtBottomRecursive = (stack: number[], num: number) => {
    if(stack.length === 0){ 
        stack.push(num)
    return;
    };

    let top = stack.pop();
    insertAtBottomRecursive(stack, num)

    stack.push(top!)
    console.log(stack)
}

insertAtBottomRecursive(([4,2,1,3,6]), 9)
